import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';
import MessageFormat from '@messageformat/core';

const MESSAGE_FORMAT_CONFIG = new InjectionToken("MESSAGE_FORMAT_CONFIG");
const defaultConfig = {
    biDiSupport: false,
    formatters: {},
    strictNumberSign: false,
    currency: "USD",
};

/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
class TranslateMessageFormatCompiler extends TranslateCompiler {
    constructor(config) {
        super();
        this.mfCache = new Map();
        const { formatters: customFormatters, biDiSupport, strictNumberSign: strict, currency, } = {
            ...defaultConfig,
            ...config,
        };
        this.config = { customFormatters, biDiSupport, strict, currency };
    }
    compile(value, lang) {
        return this.getMessageFormatInstance(lang).compile(value);
    }
    compileTranslations(translations, lang) {
        if (typeof translations === "string") {
            return this.compile(translations, lang);
        }
        return Object.keys(translations).reduce((acc, key) => {
            const value = translations[key];
            return { ...acc, [key]: this.compileTranslations(value, lang) };
        }, {});
    }
    getMessageFormatInstance(locale) {
        if (!this.mfCache.has(locale)) {
            this.mfCache.set(locale, new MessageFormat(locale, this.config));
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.mfCache.get(locale);
    }
}
TranslateMessageFormatCompiler.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TranslateMessageFormatCompiler, deps: [{ token: MESSAGE_FORMAT_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
TranslateMessageFormatCompiler.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TranslateMessageFormatCompiler });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TranslateMessageFormatCompiler, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MESSAGE_FORMAT_CONFIG]
                }] }]; } });

/* eslint-disable-next-line  no-console */
const log = (...message) => console.log(tag, ...message);
const tag = "[TranslateMessageFormatCompiler]";
class TranslateMessageFormatDebugCompiler extends TranslateMessageFormatCompiler {
    compile(value, lang) {
        log(`COMPILE (${lang})`, value);
        const interpolationFn = super.compile(value, lang);
        return this.wrap(interpolationFn, value);
    }
    compileTranslations(value, lang) {
        log(`COMPILE (${lang})`, value);
        return super.compileTranslations(value, lang);
    }
    wrap(fn, reference) {
        return (params) => {
            log("INTERPOLATE", reference, params);
            return fn(params);
        };
    }
}
TranslateMessageFormatDebugCompiler.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TranslateMessageFormatDebugCompiler, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
TranslateMessageFormatDebugCompiler.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TranslateMessageFormatDebugCompiler });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: TranslateMessageFormatDebugCompiler, decorators: [{
            type: Injectable
        }] });

/*
 * Public API Surface of ngx-translate-messageformat-compiler
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MESSAGE_FORMAT_CONFIG, TranslateMessageFormatCompiler, TranslateMessageFormatDebugCompiler, defaultConfig };
//# sourceMappingURL=ngx-translate-messageformat-compiler.mjs.map
