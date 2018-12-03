'use strict';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

Vue.config.errorHandler = function (err, vm, info) {
    $("#pageError").removeClass("d-none");
    console.error('Custom vue error handler: ', err, vm, info)
};

Vue.config.warnHandler = function (err, vm, info) {
    $("#pageError").removeClass("d-none");
    console.warn('Custom vue warn handler: ', err, vm, info);
};

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function first(array, filterFunction) {
    var results = array.filter(filterFunction);
    if (results.length === 0)
        return null;
    else
        return results[0];
}

function getSpecialityFromParameters() {
    var symptomParameter = getUrlParameter('symptom');
    var specialityParameter = getUrlParameter('speciality');

    var symptom = first(portalSearchData.symptoms, function (sy) {
        return sy.name === symptomParameter;
    });

    if (symptom === null) {
        return null;
    }

    var speciality = first(symptom.specialities, function (sp) { return sp.name === specialityParameter });

    return speciality;
}

function showContent(contentElementId) {
    $(".loader").fadeOut(300);
    $("#" + contentElementId).fadeIn(400);
}

function pivotAvailability(profileAvailability, forDays) {
    if(profileAvailability === undefined) return [];
    var availabilityPivot = [];
    for (var i = 0; i < profileAvailability.length; i++) {
        var item = profileAvailability[i];
        var dayIndex = forDays.indexOf(item.day);
        if (dayIndex !== -1) {
            for (var j = 0; j < item.times.length; j++) {
                if (availabilityPivot[j] == undefined) {
                    var newArray = new Array(forDays.length);
                    newArray[dayIndex] = item.times[j];
                    availabilityPivot.push(newArray);
                }
                else {
                    availabilityPivot[j][dayIndex] = item.times[j];
                }
            }
        }
    }
    return availabilityPivot;
}