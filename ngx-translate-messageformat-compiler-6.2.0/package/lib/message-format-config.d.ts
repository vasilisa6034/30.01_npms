import { InjectionToken } from "@angular/core";
import { CustomFormatter } from "@messageformat/core";
export declare const MESSAGE_FORMAT_CONFIG: InjectionToken<MessageFormatConfig>;
export interface MessageFormatConfig {
    biDiSupport?: boolean;
    formatters?: {
        [key: string]: CustomFormatter;
    };
    strictNumberSign?: boolean;
    currency?: string;
}
export declare const defaultConfig: MessageFormatConfig;
