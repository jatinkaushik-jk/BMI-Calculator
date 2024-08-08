const gender = document.querySelectorAll('input[type="radio"][name="gender"]');
const genDiv = document.querySelectorAll('.genderInput > div');
const unitBtns = document.querySelectorAll('.unitBtns > input');
const measureHeight = document.querySelector("#measureHeight");
const heightRange = document.querySelector("#height");
const measureWeight = document.querySelector("#measureWeight");
const weightRange = document.querySelector("#weight");
const resultBox = document.querySelector("#result");
const healthyWeight = document.querySelector("#healthyWeight");
const form = document.querySelector("form");

const submitBtn = document.querySelector("#submit");
const dataObj = {
    gender: null,
    height: null,
    hUnit: null,
    weight: null,
    wUnit: null,
}

measureHeight.value = heightRange.value;
heightRange.addEventListener("input", (event) => {
    measureHeight.value = (Math.round(event.target.value * 10) / 10).toFixed(1);
    dataObj.height = measureHeight.value;
});
measureHeight.addEventListener("input", (event) => {
    if (event.target.value > Number(event.target.getAttribute('max'))) {
        alert('Enter the value in specified range');
        event.target.value = 0;
    } else {
        heightRange.value = (Math.round(event.target.value * 10) / 10).toFixed(1);
        dataObj.height = heightRange.value;
    }

});

measureWeight.value = weightRange.value;
weightRange.addEventListener("input", (event) => {
    measureWeight.value = (Math.round(event.target.value * 10) / 10).toFixed(1);
    dataObj.weight = measureWeight.value;
});

measureWeight.addEventListener("input", (event) => {
    if (event.target.value > Number(event.target.getAttribute('max'))) {
        alert('Enter the value in specified range');
        event.target.value = 0;
    } else {
        weightRange.value = (Math.round(event.target.value * 10) / 10).toFixed(1);
        dataObj.weight = weightRange.value;
    }
});


gender.forEach((btn, index) => {
    btn.addEventListener('change', function () {
        genDiv.forEach(div => {
            div.classList.remove('genActive');
        });
        if (btn.checked) {
            genDiv[index].classList.add('genActive');
            dataObj.gender = btn.value;
        }
    });
});

unitBtns.forEach((btn) => {
    btn.addEventListener('change', function (e) {
        if (e.target.value == 'feet') {
            heightRange.setAttribute('max', '10');
            measureHeight.setAttribute('max', '10');
            heightRange.removeAttribute('disabled');
            measureHeight.removeAttribute('disabled');
            dataObj.hUnit = e.target.value;
        }
        if (e.target.value == 'cm') {
            heightRange.setAttribute('max', '250');
            measureHeight.setAttribute('max', '250');
            heightRange.removeAttribute('disabled');
            dataObj.hUnit = e.target.value;
        }
        if (e.target.value == 'kg') {
            weightRange.setAttribute('max', '400');
            measureWeight.setAttribute('max', '400');
            weightRange.removeAttribute('disabled');
            measureWeight.removeAttribute('disabled');
            dataObj.wUnit = e.target.value;
        }
        if (e.target.value == 'pounds') {
            weightRange.setAttribute('max', '1000');
            measureWeight.setAttribute('max', '1000');
            weightRange.removeAttribute('disabled');
            measureWeight.removeAttribute('disabled');
            dataObj.wUnit = e.target.value;
        }
    });
});

const healthyWeightRanges = [
    { heightCm: 137, avgWeightMaleKg: "28.5KG – 34.9KG", avgWeightFemaleKg: "28.5KG – 34.9KG" },
    { heightCm: 140, avgWeightMaleKg: "30.8KG – 38.1KG", avgWeightFemaleKg: "30.8KG – 38.1KG" },
    { heightCm: 142, avgWeightMaleKg: "33.5KG – 40.8KG", avgWeightFemaleKg: "32.6KG – 39.9KG" },
    { heightCm: 145, avgWeightMaleKg: "35.8KG – 43.9KG", avgWeightFemaleKg: "34.9KG – 42.6KG" },
    { heightCm: 147, avgWeightMaleKg: "38.5KG – 46.7KG", avgWeightFemaleKg: "36.4KG – 44.9KG" },
    { heightCm: 150, avgWeightMaleKg: "40.8KG – 49.9KG", avgWeightFemaleKg: "39KG – 47.6KG" },
    { heightCm: 152, avgWeightMaleKg: "40.1KG – 53KG", avgWeightFemaleKg: "40.8KG – 49.9KG" },
    { heightCm: 155, avgWeightMaleKg: "45.8KG – 55.8KG", avgWeightFemaleKg: "43.1KG – 52.6KG" },
    { heightCm: 157, avgWeightMaleKg: "48.1KG – 58.9KG", avgWeightFemaleKg: "44.9KG – 54.9KG" },
    { heightCm: 160, avgWeightMaleKg: "50.8KG – 60.1KG", avgWeightFemaleKg: "47.2KG – 57.6KG" },
    { heightCm: 163, avgWeightMaleKg: "50.0KG – 64.8KG", avgWeightFemaleKg: "49KG – 59.9KG" },
    { heightCm: 165, avgWeightMaleKg: "55.3KG – 68KG", avgWeightFemaleKg: "51.2KG – 62.6KG" },
    { heightCm: 168, avgWeightMaleKg: "58KG – 70.7KG", avgWeightFemaleKg: "53KG – 64.8KG" },
    { heightCm: 170, avgWeightMaleKg: "60.3KG – 73.9KG", avgWeightFemaleKg: "55.3KG – 67.6KG" },
    { heightCm: 173, avgWeightMaleKg: "63KG – 70.6KG", avgWeightFemaleKg: "57.1KG – 69.8KG" },
    { heightCm: 175, avgWeightMaleKg: "65.3KG – 79.8KG", avgWeightFemaleKg: "59.4KG – 72.6KG" },
    { heightCm: 178, avgWeightMaleKg: "67.6KG – 83KG", avgWeightFemaleKg: "61.2KG – 74.8KG" },
    { heightCm: 180, avgWeightMaleKg: "70.3KG – 85.7KG", avgWeightFemaleKg: "63.5KG – 77.5KG" },
    { heightCm: 183, avgWeightMaleKg: "72.6KG – 88.9KG", avgWeightFemaleKg: "65.3KG – 79.8KG" }
];

function submitData() {
    if (Object.values(dataObj).includes(null)) {
        alert('All fields are mandatory!\nPlease fill all the details');
    }
    else {
        const { gender, height, weight, hUnit, wUnit } = dataObj;
        let hFactor, wFactor, hFacForCM;
        switch (hUnit) {
            case 'cm':
                hFactor = 0.01;
                hFacForCM = 1;
                break;
            case 'feet':
                hFactor = 0.304;
                hFacForCM = 30.48;
                break;

            default: hFactor = 1;
                hFacForCM = 1;
                break;
        };
        switch (wUnit) {
            case 'kg':
                wFactor = 1;
                break;
            case 'pounds':
                wFactor = 0.453;
                break;

            default: wFactor = 1;
                break;
        };

        let heightInMeters = height * hFactor, weightInKgs = weight * wFactor;
        let heightInCMs = Math.round(height * hFacForCM);

        healthyWeightRanges.forEach((obj) => {
            if (Object.values(obj).includes(heightInCMs) || Object.values(obj).includes(heightInCMs + 2) || Object.values(obj).includes(heightInCMs - 2)) {
                if (gender == 'female') {
                    healthyWeight.innerHTML = obj.avgWeightFemaleKg;
                } else {
                    healthyWeight.innerHTML = obj.avgWeightMaleKg;
                }
            } else if (heightInCMs > healthyWeightRanges[healthyWeightRanges.length - 1].heightCm) {
                if (gender == 'female') {
                    healthyWeight.innerHTML = healthyWeightRanges[healthyWeightRanges.length - 1].avgWeightFemaleKg;
                } else {
                    healthyWeight.innerHTML = healthyWeightRanges[healthyWeightRanges.length - 1].avgWeightMaleKg;
                }
            };
        })

        let result = (Math.round(((weightInKgs) / Math.pow(heightInMeters, 2)) * 100) / 100).toFixed(2);
        resultBox.innerHTML = result;

    }
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    submitData();
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitData();
})