## Steps to reproduce:

1. Create new repo with `react-native init <name>`
2. Downgrade react native and react to the version we are using by modifying package.json, then `npm i` to re-install node_modules.
2. a) Also, modify Podfile to include lower version of react-native pods instead of some of the new ones. Then, `rm -rf Pods && pod install` to refresh.
3. Verify everything is working so far. At this point, `react-native run-ios` should boot the simulator and open the basic react-native app, running on react-native v0.60.3. `react-native run-android` runs the app on my connected Samsung Galaxy S7 also.
