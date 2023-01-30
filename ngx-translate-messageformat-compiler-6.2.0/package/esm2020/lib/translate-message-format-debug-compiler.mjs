import { Injectable } from "@angular/core";
import { TranslateMessageFormatCompiler } from "./translate-message-format-compiler";
import * as i0 from "@angular/core";
/* eslint-disable-next-line  no-console */
const log = (...message) => console.log(tag, ...message);
const tag = "[TranslateMessageFormatCompiler]";
export class TranslateMessageFormatDebugCompiler extends TranslateMessageFormatCompiler {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWRlYnVnLWNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90cmFuc2xhdGUtbWVzc2FnZS1mb3JtYXQtZGVidWctY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFckYsMENBQTBDO0FBQzFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFpQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ25FLE1BQU0sR0FBRyxHQUFHLGtDQUFrQyxDQUFDO0FBRy9DLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSw4QkFBOEI7SUFDOUUsT0FBTyxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQ3hDLEdBQUcsQ0FBQyxZQUFZLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRW5ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLG1CQUFtQixDQUFDLEtBQVUsRUFBRSxJQUFZO1FBQ2pELEdBQUcsQ0FBQyxZQUFZLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sSUFBSSxDQUNWLEVBQTJCLEVBQzNCLFNBQWlCO1FBRWpCLE9BQU8sQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNyQixHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUM7SUFDSixDQUFDOztnSUFyQlUsbUNBQW1DO29JQUFuQyxtQ0FBbUM7MkZBQW5DLG1DQUFtQztrQkFEL0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlTWVzc2FnZUZvcm1hdENvbXBpbGVyIH0gZnJvbSBcIi4vdHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWNvbXBpbGVyXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbm8tY29uc29sZSAqL1xuY29uc3QgbG9nID0gKC4uLm1lc3NhZ2U6IHN0cmluZ1tdKSA9PiBjb25zb2xlLmxvZyh0YWcsIC4uLm1lc3NhZ2UpO1xuY29uc3QgdGFnID0gXCJbVHJhbnNsYXRlTWVzc2FnZUZvcm1hdENvbXBpbGVyXVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlTWVzc2FnZUZvcm1hdERlYnVnQ29tcGlsZXIgZXh0ZW5kcyBUcmFuc2xhdGVNZXNzYWdlRm9ybWF0Q29tcGlsZXIge1xuICBwdWJsaWMgY29tcGlsZSh2YWx1ZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpOiAocGFyYW1zOiBhbnkpID0+IHN0cmluZyB7XG4gICAgbG9nKGBDT01QSUxFICgke2xhbmd9KWAsIHZhbHVlKTtcbiAgICBjb25zdCBpbnRlcnBvbGF0aW9uRm4gPSBzdXBlci5jb21waWxlKHZhbHVlLCBsYW5nKTtcblxuICAgIHJldHVybiB0aGlzLndyYXAoaW50ZXJwb2xhdGlvbkZuLCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgY29tcGlsZVRyYW5zbGF0aW9ucyh2YWx1ZTogYW55LCBsYW5nOiBzdHJpbmcpOiBhbnkge1xuICAgIGxvZyhgQ09NUElMRSAoJHtsYW5nfSlgLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVUcmFuc2xhdGlvbnModmFsdWUsIGxhbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSB3cmFwKFxuICAgIGZuOiAocGFyYW1zOiBhbnkpID0+IHN0cmluZyxcbiAgICByZWZlcmVuY2U6IHN0cmluZ1xuICApOiAocGFyYW1zOiBhbnkpID0+IHN0cmluZyB7XG4gICAgcmV0dXJuIChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgbG9nKFwiSU5URVJQT0xBVEVcIiwgcmVmZXJlbmNlLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuIGZuKHBhcmFtcyk7XG4gICAgfTtcbiAgfVxufVxuIl19