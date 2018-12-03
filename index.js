'use strict';

$(function () {
    var form = $("#portal-search");
    form.submit(function (event) {
        if (form[0].checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.addClass("was-validated");
    });

    $("#symptom").change(function () {
        var symptom = $("#symptom :selected").text();

        if (symptom === "Please select") {
            $("#specialityInput").tooltip('enable');
        } else {
            $("#specialityInput").tooltip('disable');
        }
    });

    showContent("portal-search");
});

var vm = new Vue({
    el: '#portal-search',
    data: portalSearchData,
    computed: {
        filteredSpeciality: function () {
            var selectedSymptom = this.symptom;
            var symptom = this.symptoms.filter(function (symptom) {return symptom.name === selectedSymptom});
            return symptom.length === 0 ? [] : symptom[0].specialities;
        }
    }
});