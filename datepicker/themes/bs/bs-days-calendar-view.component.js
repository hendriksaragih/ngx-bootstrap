import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models/index';
var BsDaysCalendarViewComponent = /** @class */ (function () {
    function BsDaysCalendarViewComponent() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    BsDaysCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    };
    BsDaysCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsDaysCalendarViewComponent.prototype.selectDay = function (event) {
        this.onSelect.emit(event);
    };
    BsDaysCalendarViewComponent.prototype.hoverDay = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsDaysCalendarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" *ngIf=\"options.showWeekNumbers\">\n            <span>{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td [class]=\"options.unavailableDates.indexOf(day.date.getFullYear() + '-' + (day.date.getMonth() + 1) + '-' + day.date.getDate()) >=0 ? 'disabled date-disabled' : ''\" *ngFor=\"let day of week.days\" >\n          <span bsDatepickerDayDecorator\n                *ngIf=\"options.unavailableDates.indexOf(day.date.getFullYear() + '-' + (day.date.getMonth() + 1) + '-' + day.date.getDate())==-1\"\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          <span *ngIf=\"options.unavailableDates.indexOf(day.date.getFullYear() + '-' + (day.date.getMonth() + 1) + '-' + day.date.getDate())>=0\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDaysCalendarViewComponent.propDecorators = {
        "calendar": [{ type: Input },],
        "options": [{ type: Input },],
        "onNavigate": [{ type: Output },],
        "onViewMode": [{ type: Output },],
        "onSelect": [{ type: Output },],
        "onHover": [{ type: Output },],
    };
    return BsDaysCalendarViewComponent;
}());
export { BsDaysCalendarViewComponent };
//# sourceMappingURL=bs-days-calendar-view.component.js.map