// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('Valid Phone Number 1', () => {
  expect(isPhoneNumber("(858) 534-2230")).toBe(true);
});

test('Valid Phone Number 2', () => {
  expect(isPhoneNumber("858-657-7000")).toBe(true);
});

test('Invalid Phone Number 1 (911)', () => {
  expect(isPhoneNumber("911")).toBe(false);
});

test('Invalid Phone Number 2 (contains letters)', () => {
  expect(isPhoneNumber("dsa165")).toBe(false);
});

test('Valid Email 1', () => {
  expect(isEmail("j6castaneda@ucsd.edu")).toBe(true);
});

test('Valid Email 2', () => {
  expect(isEmail("alumni@ucsd.edu")).toBe(true);
});

test('Invalid Email 1 (no domain)', () => {
  expect(isEmail("notanemail")).toBe(false);
});

test('Invalid Email 2 (no username)', () => {
  expect(isEmail("@ucsd.edu")).toBe(false);
});

test('Valid Password 1', () => {
  expect(isStrongPassword("admin")).toBe(true);
});

test('Valid Password 2', () => {
  expect(isStrongPassword("password")).toBe(true);
});

test('Invalid Password 1 (doesn\'t start with letter)', () => {
  expect(isStrongPassword("123password")).toBe(false);
});

test('Invalid Password 2 (invalid characters)', () => {
  expect(isStrongPassword("a#%@&^#%@@")).toBe(false);
});

test('Valid Date 1', () => {
  expect(isDate("01/01/0001")).toBe(true);
});

test('Valid Date 2', () => {
  expect(isDate("03/14/1592")).toBe(true);
});

test('Invalid Date 1 (contains letters)', () => {
  expect(isDate("ab/cd/efgh")).toBe(false);
});

test('Invalid Date 2 (invalid year length)', () => {
  expect(isDate("01/01/00001")).toBe(false);
});

test('Valid Hex Color 1', () => {
  expect(isHexColor("d0b9f0")).toBe(true);
});

test('Valid Hex Color 2', () => {
  expect(isHexColor("fff")).toBe(true);
});

test('Invalid Hex Color 1 (contains invalid symbols)', () => {
  expect(isHexColor("fffffz")).toBe(false);
});

test('Invalid Hex Color 2 (invalid length)', () => {
  expect(isHexColor("ffff")).toBe(false);
});