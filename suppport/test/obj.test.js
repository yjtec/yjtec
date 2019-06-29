import {isNull} from '../lib/obj';
test('[] is null',()=>{
  expect(isNull({})).toBe(true);
})
test('undefined is null',()=>{
  expect(isNull(undefined)).toBe(true);
})
