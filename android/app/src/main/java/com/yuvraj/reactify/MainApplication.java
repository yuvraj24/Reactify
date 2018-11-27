package com.yuvraj.reactify;

import android.annotation.*;
import android.app.*;

import com.facebook.*;
import com.facebook.appevents.*;
import com.facebook.react.*;
import com.facebook.react.shell.*; 
import com.facebook.reactnative.androidsdk.*;
import com.facebook.soloader.*;
import com.imagepicker.*;

import java.util.*;

import io.invertase.firebase.*;
import io.invertase.firebase.database.*;
import io.invertase.firebase.storage.*;

public class MainApplication extends Application implements ReactApplication {

    private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

    protected static CallbackManager getCallbackManager() {
        return mCallbackManager;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        FacebookSdk.sdkInitialize(getApplicationContext());
        AppEventsLogger.activateApp(this);
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @SuppressLint("MissingPermission")
        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(), 
                    new ImagePickerPackage(),
                    new RNFirebasePackage(),
                    new FBSDKPackage(mCallbackManager),
                    new RNFirebaseDatabasePackage(),
                    new RNFirebaseStoragePackage()
            // new RNFirebaseAuthPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
