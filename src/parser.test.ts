import * as PACKAGE from '../package.json';
import { Parser } from './parser';

describe('Parser', () => {

  let instance: Parser;

  beforeEach(() => {
    instance = new Parser();
  });

  it('should have a version', async () => {
    expect(instance).toBeInstanceOf(Parser);
    expect(instance.version).toBeDefined();
    expect(instance.version).toEqual((<any>PACKAGE).version);
  });
});