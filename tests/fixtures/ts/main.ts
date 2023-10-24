// This class has no non-static members, and is intended to be used exclusively as a static namespace.
// Its content can generally be moved at the top level of an ECMAScript module.
class StaticConstants {
  static readonly version = 42;

  static isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
  }
}

// This class has only a constructor and no fields.
// It can generally be replaced with a standalone function.
class HelloWorldLogger {
  constructor() {
    console.log('Hello, world!');
  }
}

export { StaticConstants, HelloWorldLogger }
