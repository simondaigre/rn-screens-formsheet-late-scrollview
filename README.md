# Android formSheet: scrolling a list back up drags the sheet down when the list mounts late

Expo 58.0.16, expo-router 58.0.24, react-native 0.88.0 (Fabric, Hermes), react-native-screens 4.30.0, Android 16 (API 36, Pixel 9a emulator).

`npm install && npx expo run:android --variant release`, then open each sheet from the home screen. Every sheet is a `formSheet` (detents `[0.5, 0.97]`) showing the same `ScrollView` (`nestedScrollEnabled`, 50 rows). In each one: expand the sheet, scroll the list down, then scroll it back up.

| Sheet | Nested `Stack` | `ScrollView` mounted | Scrolling back up |
| --- | --- | --- | --- |
| Nested stack, list mounted 1 s later | yes | 1 s after the sheet is presented (like data loading) | **drags the sheet down** to its lower detent; the next drag closes it |
| Nested stack, list mounted right away | yes | with the screen | scrolls the list |
| No nested stack, list mounted 1 s later | no | 1 s after the sheet is presented | **drags the sheet down** |
| No nested stack, list mounted right away | no | with the screen | scrolls the list |

So the nested stack doesn't matter: what does is a scroll view mounted once the sheet is laid out.

Cause (from logs in a `BottomSheetBehavior` subclass): `BottomSheetBehavior` only looks for its scrolling child (`findScrollingChild`) in `onLayoutChild`, which runs while the sheet is presented. A `ScrollView` mounted later is never found: the reference stays null, and with no scrolling child `onInterceptTouchEvent`/`tryCaptureView` capture every downward drag of the expanded sheet, even when the list under the finger can still scroll up. Expected: the sheet looks for its scrolling child again when its content changes (or at the start of each gesture).

The behavior can be worked around by a `BottomSheetBehavior` subclass that, on `ACTION_DOWN` on an expanded sheet, lets the gesture go to the content when a view under the finger can scroll up (`canScrollVertically(-1)`).
