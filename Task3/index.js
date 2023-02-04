const gradeTests = (data) => {


    const results = []

    data.users.forEach((user) => {
        let correct = 0
        let total = 0
        let answers = []
        if (user.test == "SAT") {
            answers = data.tests[0].answers
        } else {
            answers = data.tests[1].answers
        }
        user.responses.forEach((response, index) => {

            total += 1
            if (response == answers[index]) {
                correct += 1
            }
        })

        results.push([user.name, (correct / total) * 100])

    })

    console.log(results)
}


const getData = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => gradeTests(data))
}


getData("https://dev.foleyprep.com/interview/")


