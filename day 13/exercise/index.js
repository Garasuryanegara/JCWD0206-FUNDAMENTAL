const Q = require('./classQueue');
const arrQueue = [
 new Q(1, 'Jordan'),
 new Q(2, 'Udin'),
 new Q(3, 'Jason'),
 new Q(4, 'Suzume')
];

const execute = async (queues = []) => {
 let i = 0;
 while (i < queues.length) {
  let time = Math.floor(Math.random() * 10) + 1;
  let queuePromise = new Promise((resolve) =>
   setTimeout(
    () =>
     resolve(
      `Queue ${queues[i].antrian} ${queues[i].nama} Done in ${time} secs`
     ),
    time * 1000
   )
  );

  await queuePromise.then((val) => {
   i++;
   console.log(val);
  });
 }
};

execute(arrQueue);
