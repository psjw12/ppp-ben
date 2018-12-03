'use strict';

var vm;

$(function () {
    var speciality = getSpecialityFromParameters();
    if (speciality === null) {
        $("#parameterError").removeClass("d-none");
        return;
    }

    var nameParameter = getUrlParameter('profileName');
    var profile = first(speciality.profiles, function (item) { return item.name == nameParameter; })
    if (profile === null) {
        $("#parameterError").removeClass("d-none");
        return;
    }

    vm = new Vue({
        el: '#profile',
        data: { profile: profile },
        computed: {
            totalRating: function () {
                var total = 0;

                if (this.profile.ratings === undefined)
                    return 0;

                for (var i = 0; i < this.profile.ratings.length; i++) {
                    total += this.profile.ratings[i].stars;
                }
                return total / this.profile.ratings.length;
            }
        },
        methods: {
            availabilityPivot: function (profileAvailability, forDays) {
                return pivotAvailability(profileAvailability, forDays);
            }
        }
    })

    showContent('profile');
});