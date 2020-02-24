## Steps to reproduce:

1. Create new repo with `react-native init <name>`
2. Downgrade react native and react to the version we are using by modifying package.json, then `npm i` to re-install node_modules.
3. Also, modify Podfile to include lower version of react-native pods instead of some of the new ones. Then, `rm -rf Pods && pod install` to refresh.
4. Verify everything is working so far. At this point, `react-native run-ios` should boot the simulator and open the basic react-native app, running on react-native v0.60.3. `react-native run-android` runs the app on my connected Samsung Galaxy S7 also.
5. Install branch, following the steps on https://github.com/BranchMetrics/react-native-branch-deep-linking-attribution#installation
The exact details for step 5:
* Run `npm install --save react-native-branch`
* Run `cd ios && pod install && cd ..`
* Modify AppDelegate.m in Xcode (see this commit for exact changes)
* Modify Info.plist (Note: I set up a very basic branch test app for this, so I had the key and domain etc. In the link settings of this app in the branch dashboard, I selected 'I have an iOS app' and 'I have an Android app' and set the URI scheme for each to 'branchtest://')
* Modify MainApplication.java and MainActivity.java
* Modify AndroidManifest.xml according to https://dashboard.branch.io/start/existing-users/android and the repository README.md
* Modify `android/app/proguard-rules.pro` with `-dontwarn io.branch.**`

6. Verify that everything is working. At this point, `react-native run-android` and `react-native run-ios` still work, and branch should be installed.
7. Add branch code. In our main project, we have a function that takes an object and generates a BUO for it, and returns the short URL for this BUO.
