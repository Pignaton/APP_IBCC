package com.comunidade_de_cristo_app1;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

import com.BV.LinearGradient.LinearGradientPackage; // <--- This!

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "comunidade_de_cristo_app1";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

}
