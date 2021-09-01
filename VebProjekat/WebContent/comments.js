let comments = new Vue({

	el : "#coms",

	data : {
        comments  : [{"id":"1","author":{"username":"mini","password":"minkica","fistName":"Minka","lastName":"Minkicaa","gender":"FEMALE","dateOfBirth":944956800000,"role":"CUSTOMER","orders":null,"cart":null,"points":0,"type":null,"blocked":false,"deleted":false},"restaurant":{"id":"1","name":"Ciao Pizzeria","typeOfRestaurant":null,"menu":null,"status":"OPEN","location":null,"logo":"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwM0U4MEMyMTU2MDExRThBQjYxQzM0RUQyRjMwQTAxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwM0U4MEMxMTU2MDExRThBQjYxQzM0RUQyRjMwQTAxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iRkE0Q0VGNzU4MjdBNjREMTNENjVCQURBNzRFMjI3OEQiIHN0UmVmOmRvY3VtZW50SUQ9IkZBNENFRjc1ODI3QTY0RDEzRDY1QkFEQTc0RTIyNzhEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+0ASFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAgAAAgACADhCSU0EJQAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=","averageRating":0.0,"deleted":false},"text":"Preukusna hrana!","rating":5,"approved":true,"deleted":false},{"id":"2","author":{"username":"mini","password":"minkica","fistName":"Minka","lastName":"Minkicaa","gender":"FEMALE","dateOfBirth":944956800000,"role":"CUSTOMER","orders":null,"cart":null,"points":0,"type":null,"blocked":false,"deleted":false},"restaurant":{"id":"3","name":"Dva stapica","typeOfRestaurant":"Kineski","menu":null,"status":null,"location":null,"logo":"data:image/png;base64,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","averageRating":0.0,"deleted":false},"text":"Okej ukus, samo relativno spora usluga. kme","rating":4,"approved":false,"deleted":false}]
	},

    mounted : function() {
         axios
        .get('rest/comments/getAllComments')
        .then(response => (this.comments = response.data))
    }

});