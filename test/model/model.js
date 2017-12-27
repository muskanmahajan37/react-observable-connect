import Subscriber from './util/subscriber';

class SampleModelObject {

  constructor() {
    this.subscriber = new Subscriber();
    this.foo = "";
    this.bar = "fizzbuzz";
    this.n = 3;
    this.data = [2,3,5,7,11];
    this.unrenderedValue = 10;
  }

  subscribe(fn) {
    return this.subscriber.subscribe(fn);
  }

  incrementN() {
    this.n += 1;
    this.subscriber.trigger();
  }

  setUnrenderedValue(val) {
    this.unrenderedValue = val;
    this.subscriber.trigger();
  }

}

export default function generateSampleModelObject() {
  return new SampleModelObject();
}
