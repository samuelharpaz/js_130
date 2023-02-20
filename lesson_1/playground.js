Array.prototype.myReduce = function(fn, initialVal) {
  let accumulator = initialVal;
  let index = 0;

  if (typeof accumulator === 'undefined') {
    accumulator = this[0];
    index = 1;
  }

  while (index < this.length) {
    accumulator = fn(accumulator, this[index], index, this);
    
    index += 1;
  }

  return accumulator;
}

const peopleArr  = [
  {
      username:    'glestrade',
      displayname: 'Inspector Lestrade',
      email:       'glestrade@met.police.uk',
      authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
      lastSeen:    '2019-05-13T11:07:22+00:00',
  },
  {
      username:    'mholmes',
      displayname: 'Mycroft Holmes',
      email:       'mholmes@gov.uk',
      authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
      lastSeen:    '2019-05-10T11:21:36+00:00',
  },
  {
      username:    'iadler',
      displayname: 'Irene Adler',
      email:       null,
      authHash:    '319d55944f13760af0a07bf24bd1de28',
      lastSeen:    '2019-05-17T11:12:12+00:00',
  },
];

function keyByUsername(obj, person) {
  const { username, ...otherProps } = person;
  return {...obj, [person.username]: otherProps};
}

const peopleObj = peopleArr.reduce(keyByUsername, {});
console.log(peopleObj);
