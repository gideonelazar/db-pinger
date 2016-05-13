export default function(PingerService, ValidationService) {
    'ngInject';
    let vm = this;
    vm.checkDB = checkDB;
    vm.ValidationCheck = ValidationService.ValidationCheck;

    function checkDB() {
        PingerService.Check().then((res) => {
            console.log(res);
        });

    }


}
