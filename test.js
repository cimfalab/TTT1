function a1() {
      var selectedStack = this.get('content.stacks').findProperty('isSelected', true);
      selectedStack.set('reload', true); // 1)
      if (selectedStack && selectedStack.get('operatingSystems')) { // 2)
          console.log(2);
      }
}

function a2(data) {
      if (!data) {
        console.warn('error while loading default config values');
      }
      this._saveRecommendedValues(data); // 1)
      var configObject = data.resources[0].recommendations.blueprint.configurations; // 2)
      if (configObject) this.updateInitialValue(configObject);
      this.set("recommendationsConfigs", Em.get(data.resources[0] , "recommendations.blueprint.configurations"));
}

function a3() {
    var x = { p: true };
    x.p = null;
    console.log(x.p.q);
}

function a4() {
    function foo() {
        x = null;
        return x;
    }
    x = null;
    x.p;
}
