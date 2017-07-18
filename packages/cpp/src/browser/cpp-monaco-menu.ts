/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable } from "inversify";
import { MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
// import { CppCommands } from "./cpp-commands"
// import { EDITOR_CONTEXT_MENU_ID } from "@theia/editor/lib/browser";

@injectable()
export class CppMenuContribution implements MenuContribution {
    registerMenus(registry: MenuModelRegistry) {
        // Explicitly register the Edit Submenu

        // registry.registerMenuAction([EDITOR_CONTEXT_MENU_ID, "1_undo/redo"], {
        //     commandId: CppCommands.SWITCH_SOURCE_HEADER
        // });

        // const wrap: (item: IMenuItem) => { path: string[], commandId: string } = (item) => {
        //     return { path: [EDITOR_CONTEXT_MENU_ID, (item.group || "")], commandId: item.command.id };
        // };

        // MenuRegistry.getMenuItems(MenuId.EditorContext)
        //     .map(item => wrap(item))
        //     .forEach(props => registry.registerMenuAction(props.path, { commandId: props.commandId }));

    }
}