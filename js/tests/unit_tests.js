test('fullName property returns both first and last', function() {
    var person = App.Person.create({firstName: 'toran', lastName: 'billups'});
    var result = person.get('fullName');
    equal(result, 'toran billups', "fullName was " + result);
});

test('fullName property updates when firstName is changed', function() {
    var person = App.Person.create({firstName: 'toran', lastName: 'billups'});
    var result = person.get('fullName');
    equal(result, 'toran billups', "fullName was " + result);
    person.set('firstName', 'wat');
    result = person.get('fullName');
    equal(result, 'wat billups', "fullName was " + result);
});

test('fullName property updates when lastName is changed', function() {
    var person = App.Person.create({firstName: 'toran', lastName: 'billups'});
    var result = person.get('fullName');
    equal(result, 'toran billups', "fullName was " + result);
    person.set('lastName', 'tbozz');
    result = person.get('fullName');
    equal(result, 'toran tbozz', "fullName was " + result);
});

test('description will return the more detailed status for A', function() {
    var person = App.Person.create({status: "A"});
    var description = person.get('description');
    equal(description, 'Approved')
});

test('description will return the more detailed status for B', function() {
    var person = App.Person.create({status: "B"});
    var description = person.get('description');
    equal(description, 'Broken')
});

test('description will update when status is modified', function() {
    var person = App.Person.create({status: "B"});
    var description = person.get('description');
    equal(description, 'Broken')
    person.set('status', 'Z');
    var description = person.get('description');
    equal(description, 'Pending')
});

test('description will return the more detailed status for everything else', function() {
    var person = App.Person.create({status: "Z"});
    var description = person.get('description');
    equal(description, 'Pending')
});
