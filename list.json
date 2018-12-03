'use strict';

var vm;

$(function () {
    var speciality = getSpecialityFromParameters();
    if (speciality === null) {
        $("#searchParameterError").removeClass("d-none");
        return;
    }

    vm = new Vue({
        el: '#profile-list',
        data: {
            speciality: speciality,
            filter: { gender: { male: false, female: false } },
            symptom: getUrlParameter('symptom')
        },
        computed: {
            filteredProfiles: function () {
                var that = this;
                return this.speciality.profiles.filter(function (item) {
                    return (item.gender === "male" && that.filter.gender.male)
                        || (item.gender === "female" && that.filter.gender.female)
                        || (that.filter.gender.male === false && that.filter.gender.female === false);
                });
            }
        },
        methods: {
            availabilityPivot: function (profileAvailability, forDays) {
                return pivotAvailability(profileAvailability, forDays);
            }
        }
    });

    $('#bookModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var dayIndex = button.data('day');
        var time = button.data('time');

        var day = '';
        switch(dayIndex) {
            case 0:
                day = 'today';
                break;
            case 1:
                day = 'tomorrow';
                break;
            case 2:
                day = 'on Thursday';
                break;
        }

        var modal = $(this);
        modal.find('#modelAppointmentTime').text(day + ' at ' + time);
      })

    showContent('profileList');
});