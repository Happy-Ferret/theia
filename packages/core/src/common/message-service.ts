/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable, inject } from "inversify";
import { MessageClient, MessageType } from "./message-service-protocol";

@injectable()
export class MessageService {

    constructor(
        @inject(MessageClient) protected readonly client: MessageClient
    ) { }

    /**
     *
     * MessageSevice uses some methods to report information either log, info, warn and error
     * One parameter is optional:  @param autoDismiss
     * If not set, then the preference value "notification.autoDismiss" will be taken into account
     * (Default:5000 or value set in settings.json)
     * The autoDismiss value is set in milisec, so 5000 = 5000 msec = 5 sec
     * If we set autoDismiss: 0, then the notification preference will be ignored and notification remains until user intervention.
     */

    log(message: string, autoDismiss?: number | undefined, ...actions: string[]): Promise<string | undefined> {
        return this.client.showMessage({ type: MessageType.Log, timeout: autoDismiss, text: message, actions: actions || [] });
    }

    info(message: string, autoDismiss?: number | undefined, ...actions: string[]): Promise<string | undefined> {
        return this.client.showMessage({ type: MessageType.Info, timeout: autoDismiss, text: message, actions: actions || [] });
    }

    warn(message: string, autoDismiss?: number | undefined, ...actions: string[]): Promise<string | undefined> {
        return this.client.showMessage({ type: MessageType.Warning, timeout: autoDismiss, text: message, actions: actions || [] });
    }

    error(message: string, autoDismiss?: number | undefined, ...actions: string[]): Promise<string | undefined> {
        return this.client.showMessage({ type: MessageType.Error, timeout: autoDismiss, text: message, actions: actions || [] });
    }

}
