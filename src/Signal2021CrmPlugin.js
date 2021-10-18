import React from "react";
import { VERSION } from "@twilio/flex-ui";
import { FlexPlugin } from "flex-plugin";

import reducers, { namespace } from "./states";

const PLUGIN_NAME = "Signal2021CrmPlugin";

export default class Signal2021CrmPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);
    
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      return task 
      ? `https://app.hubspot.com/reports-dashboard/20542207/view/2256655?globalSearchQuery=${task.attributes.name}`
      : "https://app.hubspot.com/contacts/20542207/objects/0-1/views/all/list";
    }

      

    flex.AgentDesktopView.defaultProps.splitterOptions = { initialFirstPanelSize: "300px", minimumFirstPanelSize: "300px" };
  
  }



  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(
        `You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`
      );

      }

    manager.store.addReducer(namespace, reducers);
  }
}
