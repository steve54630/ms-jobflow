
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model SocialLogins
 * 
 */
export type SocialLogins = $Result.DefaultSelection<Prisma.$SocialLoginsPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLogins`: Exposes CRUD operations for the **SocialLogins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLogins
    * const socialLogins = await prisma.socialLogins.findMany()
    * ```
    */
  get socialLogins(): Prisma.SocialLoginsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql


  /**
   * Prisma.skip
   */
  export import skip = runtime.skip


  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Member: 'Member',
    SocialLogins: 'SocialLogins',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "member" | "socialLogins" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      SocialLogins: {
        payload: Prisma.$SocialLoginsPayload<ExtArgs>
        fields: Prisma.SocialLoginsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLoginsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLoginsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          findFirst: {
            args: Prisma.SocialLoginsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLoginsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          findMany: {
            args: Prisma.SocialLoginsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>[]
          }
          create: {
            args: Prisma.SocialLoginsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          createMany: {
            args: Prisma.SocialLoginsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SocialLoginsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          update: {
            args: Prisma.SocialLoginsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          deleteMany: {
            args: Prisma.SocialLoginsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLoginsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialLoginsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLoginsPayload>
          }
          aggregate: {
            args: Prisma.SocialLoginsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLogins>
          }
          groupBy: {
            args: Prisma.SocialLoginsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLoginsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLoginsCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLoginsCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    member?: MemberOmit
    socialLogins?: SocialLoginsOmit
    refreshToken?: RefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    RefreshToken: number
    socialLogins: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RefreshToken?: boolean | MemberCountOutputTypeCountRefreshTokenArgs
    socialLogins?: boolean | MemberCountOutputTypeCountSocialLoginsArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput | $Types.Skip
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountSocialLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLoginsWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type MemberSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type MemberMinAggregateInputType = {
    id?: true | $Types.Skip
    username?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type MemberMaxAggregateInputType = {
    id?: true | $Types.Skip
    username?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type MemberCountAggregateInputType = {
    id?: true | $Types.Skip
    username?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput | $Types.Skip
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[] | $Types.Skip
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string | null
    created_at: Date
    updated_at: Date
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    RefreshToken?: boolean | Member$RefreshTokenArgs<ExtArgs> | $Types.Skip
    socialLogins?: boolean | Member$socialLoginsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "created_at" | "updated_at", ExtArgs["result"]["member"], $Types.Skip>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RefreshToken?: boolean | Member$RefreshTokenArgs<ExtArgs> | $Types.Skip
    socialLogins?: boolean | Member$socialLoginsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      RefreshToken: Prisma.$RefreshTokenPayload<ExtArgs>[]
      socialLogins: Prisma.$SocialLoginsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RefreshToken<T extends Member$RefreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, Member$RefreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    socialLogins<T extends Member$socialLoginsArgs<ExtArgs> = {}>(args?: Subset<T, Member$socialLoginsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'Int'>
    readonly username: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly password: FieldRef<"Member", 'String'>
    readonly created_at: FieldRef<"Member", 'DateTime'>
    readonly updated_at: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number | $Types.Skip
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput | $Types.Skip
    /**
     * Limit how many Members to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput | $Types.Skip
    /**
     * Limit how many Members to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Member.RefreshToken
   */
  export type Member$RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput | $Types.Skip
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[] | $Types.Skip
    cursor?: RefreshTokenWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member.socialLogins
   */
  export type Member$socialLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    where?: SocialLoginsWhereInput | $Types.Skip
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[] | $Types.Skip
    cursor?: SocialLoginsWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: SocialLoginsScalarFieldEnum | SocialLoginsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model SocialLogins
   */

  export type AggregateSocialLogins = {
    _count: SocialLoginsCountAggregateOutputType | null
    _avg: SocialLoginsAvgAggregateOutputType | null
    _sum: SocialLoginsSumAggregateOutputType | null
    _min: SocialLoginsMinAggregateOutputType | null
    _max: SocialLoginsMaxAggregateOutputType | null
  }

  export type SocialLoginsAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type SocialLoginsSumAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type SocialLoginsMinAggregateOutputType = {
    id: number | null
    member_id: number | null
    provider: string | null
    provider_id: string | null
    access_token: string | null
    refresh_token: string | null
  }

  export type SocialLoginsMaxAggregateOutputType = {
    id: number | null
    member_id: number | null
    provider: string | null
    provider_id: string | null
    access_token: string | null
    refresh_token: string | null
  }

  export type SocialLoginsCountAggregateOutputType = {
    id: number
    member_id: number
    provider: number
    provider_id: number
    access_token: number
    refresh_token: number
    _all: number
  }


  export type SocialLoginsAvgAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type SocialLoginsSumAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type SocialLoginsMinAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
    provider?: true | $Types.Skip
    provider_id?: true | $Types.Skip
    access_token?: true | $Types.Skip
    refresh_token?: true | $Types.Skip
  }

  export type SocialLoginsMaxAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
    provider?: true | $Types.Skip
    provider_id?: true | $Types.Skip
    access_token?: true | $Types.Skip
    refresh_token?: true | $Types.Skip
  }

  export type SocialLoginsCountAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
    provider?: true | $Types.Skip
    provider_id?: true | $Types.Skip
    access_token?: true | $Types.Skip
    refresh_token?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type SocialLoginsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLogins to aggregate.
     */
    where?: SocialLoginsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLogins to fetch.
     */
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLoginsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLogins from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLogins.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLogins
    **/
    _count?: true | SocialLoginsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialLoginsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialLoginsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLoginsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLoginsMaxAggregateInputType
  }

  export type GetSocialLoginsAggregateType<T extends SocialLoginsAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLogins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLogins[P]>
      : GetScalarType<T[P], AggregateSocialLogins[P]>
  }




  export type SocialLoginsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLoginsWhereInput | $Types.Skip
    orderBy?: SocialLoginsOrderByWithAggregationInput | SocialLoginsOrderByWithAggregationInput[] | $Types.Skip
    by: SocialLoginsScalarFieldEnum[] | SocialLoginsScalarFieldEnum
    having?: SocialLoginsScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: SocialLoginsCountAggregateInputType | true
    _avg?: SocialLoginsAvgAggregateInputType
    _sum?: SocialLoginsSumAggregateInputType
    _min?: SocialLoginsMinAggregateInputType
    _max?: SocialLoginsMaxAggregateInputType
  }

  export type SocialLoginsGroupByOutputType = {
    id: number
    member_id: number
    provider: string
    provider_id: string
    access_token: string
    refresh_token: string | null
    _count: SocialLoginsCountAggregateOutputType | null
    _avg: SocialLoginsAvgAggregateOutputType | null
    _sum: SocialLoginsSumAggregateOutputType | null
    _min: SocialLoginsMinAggregateOutputType | null
    _max: SocialLoginsMaxAggregateOutputType | null
  }

  type GetSocialLoginsGroupByPayload<T extends SocialLoginsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLoginsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLoginsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLoginsGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLoginsGroupByOutputType[P]>
        }
      >
    >


  export type SocialLoginsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    provider?: boolean | $Types.Skip
    provider_id?: boolean | $Types.Skip
    access_token?: boolean | $Types.Skip
    refresh_token?: boolean | $Types.Skip
    member?: boolean | MemberDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["socialLogins"]>



  export type SocialLoginsSelectScalar = {
    id?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    provider?: boolean | $Types.Skip
    provider_id?: boolean | $Types.Skip
    access_token?: boolean | $Types.Skip
    refresh_token?: boolean | $Types.Skip
  }

  export type SocialLoginsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_id" | "provider" | "provider_id" | "access_token" | "refresh_token", ExtArgs["result"]["socialLogins"], $Types.Skip>
  export type SocialLoginsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $SocialLoginsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLogins"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      member_id: number
      provider: string
      provider_id: string
      access_token: string
      refresh_token: string | null
    }, ExtArgs["result"]["socialLogins"]>
    composites: {}
  }

  type SocialLoginsGetPayload<S extends boolean | null | undefined | SocialLoginsDefaultArgs> = $Result.GetResult<Prisma.$SocialLoginsPayload, S>

  type SocialLoginsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLoginsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLoginsCountAggregateInputType | true
    }

  export interface SocialLoginsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLogins'], meta: { name: 'SocialLogins' } }
    /**
     * Find zero or one SocialLogins that matches the filter.
     * @param {SocialLoginsFindUniqueArgs} args - Arguments to find a SocialLogins
     * @example
     * // Get one SocialLogins
     * const socialLogins = await prisma.socialLogins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLoginsFindUniqueArgs>(args: SelectSubset<T, SocialLoginsFindUniqueArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLogins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLoginsFindUniqueOrThrowArgs} args - Arguments to find a SocialLogins
     * @example
     * // Get one SocialLogins
     * const socialLogins = await prisma.socialLogins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLoginsFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLoginsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsFindFirstArgs} args - Arguments to find a SocialLogins
     * @example
     * // Get one SocialLogins
     * const socialLogins = await prisma.socialLogins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLoginsFindFirstArgs>(args?: SelectSubset<T, SocialLoginsFindFirstArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLogins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsFindFirstOrThrowArgs} args - Arguments to find a SocialLogins
     * @example
     * // Get one SocialLogins
     * const socialLogins = await prisma.socialLogins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLoginsFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLoginsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLogins
     * const socialLogins = await prisma.socialLogins.findMany()
     * 
     * // Get first 10 SocialLogins
     * const socialLogins = await prisma.socialLogins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLoginsWithIdOnly = await prisma.socialLogins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLoginsFindManyArgs>(args?: SelectSubset<T, SocialLoginsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLogins.
     * @param {SocialLoginsCreateArgs} args - Arguments to create a SocialLogins.
     * @example
     * // Create one SocialLogins
     * const SocialLogins = await prisma.socialLogins.create({
     *   data: {
     *     // ... data to create a SocialLogins
     *   }
     * })
     * 
     */
    create<T extends SocialLoginsCreateArgs>(args: SelectSubset<T, SocialLoginsCreateArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLogins.
     * @param {SocialLoginsCreateManyArgs} args - Arguments to create many SocialLogins.
     * @example
     * // Create many SocialLogins
     * const socialLogins = await prisma.socialLogins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLoginsCreateManyArgs>(args?: SelectSubset<T, SocialLoginsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SocialLogins.
     * @param {SocialLoginsDeleteArgs} args - Arguments to delete one SocialLogins.
     * @example
     * // Delete one SocialLogins
     * const SocialLogins = await prisma.socialLogins.delete({
     *   where: {
     *     // ... filter to delete one SocialLogins
     *   }
     * })
     * 
     */
    delete<T extends SocialLoginsDeleteArgs>(args: SelectSubset<T, SocialLoginsDeleteArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLogins.
     * @param {SocialLoginsUpdateArgs} args - Arguments to update one SocialLogins.
     * @example
     * // Update one SocialLogins
     * const socialLogins = await prisma.socialLogins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLoginsUpdateArgs>(args: SelectSubset<T, SocialLoginsUpdateArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLogins.
     * @param {SocialLoginsDeleteManyArgs} args - Arguments to filter SocialLogins to delete.
     * @example
     * // Delete a few SocialLogins
     * const { count } = await prisma.socialLogins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLoginsDeleteManyArgs>(args?: SelectSubset<T, SocialLoginsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLogins
     * const socialLogins = await prisma.socialLogins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLoginsUpdateManyArgs>(args: SelectSubset<T, SocialLoginsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialLogins.
     * @param {SocialLoginsUpsertArgs} args - Arguments to update or create a SocialLogins.
     * @example
     * // Update or create a SocialLogins
     * const socialLogins = await prisma.socialLogins.upsert({
     *   create: {
     *     // ... data to create a SocialLogins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLogins we want to update
     *   }
     * })
     */
    upsert<T extends SocialLoginsUpsertArgs>(args: SelectSubset<T, SocialLoginsUpsertArgs<ExtArgs>>): Prisma__SocialLoginsClient<$Result.GetResult<Prisma.$SocialLoginsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsCountArgs} args - Arguments to filter SocialLogins to count.
     * @example
     * // Count the number of SocialLogins
     * const count = await prisma.socialLogins.count({
     *   where: {
     *     // ... the filter for the SocialLogins we want to count
     *   }
     * })
    **/
    count<T extends SocialLoginsCountArgs>(
      args?: Subset<T, SocialLoginsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLoginsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialLoginsAggregateArgs>(args: Subset<T, SocialLoginsAggregateArgs>): Prisma.PrismaPromise<GetSocialLoginsAggregateType<T>>

    /**
     * Group by SocialLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLoginsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialLoginsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLoginsGroupByArgs['orderBy'] }
        : { orderBy?: SocialLoginsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialLoginsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLoginsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLogins model
   */
  readonly fields: SocialLoginsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLogins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLoginsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialLogins model
   */
  interface SocialLoginsFieldRefs {
    readonly id: FieldRef<"SocialLogins", 'Int'>
    readonly member_id: FieldRef<"SocialLogins", 'Int'>
    readonly provider: FieldRef<"SocialLogins", 'String'>
    readonly provider_id: FieldRef<"SocialLogins", 'String'>
    readonly access_token: FieldRef<"SocialLogins", 'String'>
    readonly refresh_token: FieldRef<"SocialLogins", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SocialLogins findUnique
   */
  export type SocialLoginsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where: SocialLoginsWhereUniqueInput
  }

  /**
   * SocialLogins findUniqueOrThrow
   */
  export type SocialLoginsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where: SocialLoginsWhereUniqueInput
  }

  /**
   * SocialLogins findFirst
   */
  export type SocialLoginsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where?: SocialLoginsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLogins to fetch.
     */
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLogins.
     */
    cursor?: SocialLoginsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLogins from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLogins.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLogins.
     */
    distinct?: SocialLoginsScalarFieldEnum | SocialLoginsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * SocialLogins findFirstOrThrow
   */
  export type SocialLoginsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where?: SocialLoginsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLogins to fetch.
     */
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLogins.
     */
    cursor?: SocialLoginsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLogins from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLogins.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLogins.
     */
    distinct?: SocialLoginsScalarFieldEnum | SocialLoginsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * SocialLogins findMany
   */
  export type SocialLoginsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLogins to fetch.
     */
    where?: SocialLoginsWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLogins to fetch.
     */
    orderBy?: SocialLoginsOrderByWithRelationInput | SocialLoginsOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLogins.
     */
    cursor?: SocialLoginsWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLogins from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLogins.
     */
    skip?: number | $Types.Skip
    distinct?: SocialLoginsScalarFieldEnum | SocialLoginsScalarFieldEnum[] | $Types.Skip
  }

  /**
   * SocialLogins create
   */
  export type SocialLoginsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialLogins.
     */
    data: XOR<SocialLoginsCreateInput, SocialLoginsUncheckedCreateInput>
  }

  /**
   * SocialLogins createMany
   */
  export type SocialLoginsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLogins.
     */
    data: SocialLoginsCreateManyInput | SocialLoginsCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * SocialLogins update
   */
  export type SocialLoginsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialLogins.
     */
    data: XOR<SocialLoginsUpdateInput, SocialLoginsUncheckedUpdateInput>
    /**
     * Choose, which SocialLogins to update.
     */
    where: SocialLoginsWhereUniqueInput
  }

  /**
   * SocialLogins updateMany
   */
  export type SocialLoginsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLogins.
     */
    data: XOR<SocialLoginsUpdateManyMutationInput, SocialLoginsUncheckedUpdateManyInput>
    /**
     * Filter which SocialLogins to update
     */
    where?: SocialLoginsWhereInput | $Types.Skip
    /**
     * Limit how many SocialLogins to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * SocialLogins upsert
   */
  export type SocialLoginsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialLogins to update in case it exists.
     */
    where: SocialLoginsWhereUniqueInput
    /**
     * In case the SocialLogins found by the `where` argument doesn't exist, create a new SocialLogins with this data.
     */
    create: XOR<SocialLoginsCreateInput, SocialLoginsUncheckedCreateInput>
    /**
     * In case the SocialLogins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLoginsUpdateInput, SocialLoginsUncheckedUpdateInput>
  }

  /**
   * SocialLogins delete
   */
  export type SocialLoginsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
    /**
     * Filter which SocialLogins to delete.
     */
    where: SocialLoginsWhereUniqueInput
  }

  /**
   * SocialLogins deleteMany
   */
  export type SocialLoginsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLogins to delete
     */
    where?: SocialLoginsWhereInput | $Types.Skip
    /**
     * Limit how many SocialLogins to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * SocialLogins without action
   */
  export type SocialLoginsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLogins
     */
    select?: SocialLoginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLogins
     */
    omit?: SocialLoginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLoginsInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    member_id: number | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    member_id: number | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    member_id: number
    token: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
    token?: true | $Types.Skip
    expires_at?: true | $Types.Skip
    created_at?: true | $Types.Skip
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
    token?: true | $Types.Skip
    expires_at?: true | $Types.Skip
    created_at?: true | $Types.Skip
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
    token?: true | $Types.Skip
    expires_at?: true | $Types.Skip
    created_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput | $Types.Skip
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[] | $Types.Skip
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    member_id: number
    token: string
    expires_at: Date
    created_at: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    token?: boolean | $Types.Skip
    expires_at?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    member?: boolean | MemberDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    token?: boolean | $Types.Skip
    expires_at?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_id" | "token" | "expires_at" | "created_at", ExtArgs["result"]["refreshToken"], $Types.Skip>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      member_id: number
      token: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly member_id: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly expires_at: FieldRef<"RefreshToken", 'DateTime'>
    readonly created_at: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[] | $Types.Skip
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[] | $Types.Skip
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number | $Types.Skip
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[] | $Types.Skip
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput | $Types.Skip
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput | $Types.Skip
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MemberScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const SocialLoginsScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    provider: 'provider',
    provider_id: 'provider_id',
    access_token: 'access_token',
    refresh_token: 'refresh_token'
  };

  export type SocialLoginsScalarFieldEnum = (typeof SocialLoginsScalarFieldEnum)[keyof typeof SocialLoginsScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    token: 'token',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MemberOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type MemberOrderByRelevanceFieldEnum = (typeof MemberOrderByRelevanceFieldEnum)[keyof typeof MemberOrderByRelevanceFieldEnum]


  export const SocialLoginsOrderByRelevanceFieldEnum: {
    provider: 'provider',
    provider_id: 'provider_id',
    access_token: 'access_token',
    refresh_token: 'refresh_token'
  };

  export type SocialLoginsOrderByRelevanceFieldEnum = (typeof SocialLoginsOrderByRelevanceFieldEnum)[keyof typeof SocialLoginsOrderByRelevanceFieldEnum]


  export const RefreshTokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[] | $Types.Skip
    OR?: MemberWhereInput[] | $Types.Skip
    NOT?: MemberWhereInput | MemberWhereInput[] | $Types.Skip
    id?: IntFilter<"Member"> | number | $Types.Skip
    username?: StringFilter<"Member"> | string | $Types.Skip
    email?: StringFilter<"Member"> | string | $Types.Skip
    password?: StringNullableFilter<"Member"> | string | null | $Types.Skip
    created_at?: DateTimeFilter<"Member"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Member"> | Date | string | $Types.Skip
    RefreshToken?: RefreshTokenListRelationFilter | $Types.Skip
    socialLogins?: SocialLoginsListRelationFilter | $Types.Skip
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrderInput | SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    RefreshToken?: RefreshTokenOrderByRelationAggregateInput | $Types.Skip
    socialLogins?: SocialLoginsOrderByRelationAggregateInput | $Types.Skip
    _relevance?: MemberOrderByRelevanceInput | $Types.Skip
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    username?: string | $Types.Skip
    email?: string | $Types.Skip
    AND?: MemberWhereInput | MemberWhereInput[] | $Types.Skip
    OR?: MemberWhereInput[] | $Types.Skip
    NOT?: MemberWhereInput | MemberWhereInput[] | $Types.Skip
    password?: StringNullableFilter<"Member"> | string | null | $Types.Skip
    created_at?: DateTimeFilter<"Member"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Member"> | Date | string | $Types.Skip
    RefreshToken?: RefreshTokenListRelationFilter | $Types.Skip
    socialLogins?: SocialLoginsListRelationFilter | $Types.Skip
  }, "id" | "username" | "email">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrderInput | SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: MemberCountOrderByAggregateInput | $Types.Skip
    _avg?: MemberAvgOrderByAggregateInput | $Types.Skip
    _max?: MemberMaxOrderByAggregateInput | $Types.Skip
    _min?: MemberMinOrderByAggregateInput | $Types.Skip
    _sum?: MemberSumOrderByAggregateInput | $Types.Skip
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: MemberScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Member"> | number | $Types.Skip
    username?: StringWithAggregatesFilter<"Member"> | string | $Types.Skip
    email?: StringWithAggregatesFilter<"Member"> | string | $Types.Skip
    password?: StringNullableWithAggregatesFilter<"Member"> | string | null | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Member"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Member"> | Date | string | $Types.Skip
  }

  export type SocialLoginsWhereInput = {
    AND?: SocialLoginsWhereInput | SocialLoginsWhereInput[] | $Types.Skip
    OR?: SocialLoginsWhereInput[] | $Types.Skip
    NOT?: SocialLoginsWhereInput | SocialLoginsWhereInput[] | $Types.Skip
    id?: IntFilter<"SocialLogins"> | number | $Types.Skip
    member_id?: IntFilter<"SocialLogins"> | number | $Types.Skip
    provider?: StringFilter<"SocialLogins"> | string | $Types.Skip
    provider_id?: StringFilter<"SocialLogins"> | string | $Types.Skip
    access_token?: StringFilter<"SocialLogins"> | string | $Types.Skip
    refresh_token?: StringNullableFilter<"SocialLogins"> | string | null | $Types.Skip
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput> | $Types.Skip
  }

  export type SocialLoginsOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    provider_id?: SortOrder | $Types.Skip
    access_token?: SortOrder | $Types.Skip
    refresh_token?: SortOrderInput | SortOrder | $Types.Skip
    member?: MemberOrderByWithRelationInput | $Types.Skip
    _relevance?: SocialLoginsOrderByRelevanceInput | $Types.Skip
  }

  export type SocialLoginsWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    provider_provider_id?: SocialLoginsProviderProvider_idCompoundUniqueInput | $Types.Skip
    AND?: SocialLoginsWhereInput | SocialLoginsWhereInput[] | $Types.Skip
    OR?: SocialLoginsWhereInput[] | $Types.Skip
    NOT?: SocialLoginsWhereInput | SocialLoginsWhereInput[] | $Types.Skip
    member_id?: IntFilter<"SocialLogins"> | number | $Types.Skip
    provider?: StringFilter<"SocialLogins"> | string | $Types.Skip
    provider_id?: StringFilter<"SocialLogins"> | string | $Types.Skip
    access_token?: StringFilter<"SocialLogins"> | string | $Types.Skip
    refresh_token?: StringNullableFilter<"SocialLogins"> | string | null | $Types.Skip
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput> | $Types.Skip
  }, "id" | "provider_provider_id">

  export type SocialLoginsOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    provider_id?: SortOrder | $Types.Skip
    access_token?: SortOrder | $Types.Skip
    refresh_token?: SortOrderInput | SortOrder | $Types.Skip
    _count?: SocialLoginsCountOrderByAggregateInput | $Types.Skip
    _avg?: SocialLoginsAvgOrderByAggregateInput | $Types.Skip
    _max?: SocialLoginsMaxOrderByAggregateInput | $Types.Skip
    _min?: SocialLoginsMinOrderByAggregateInput | $Types.Skip
    _sum?: SocialLoginsSumOrderByAggregateInput | $Types.Skip
  }

  export type SocialLoginsScalarWhereWithAggregatesInput = {
    AND?: SocialLoginsScalarWhereWithAggregatesInput | SocialLoginsScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: SocialLoginsScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: SocialLoginsScalarWhereWithAggregatesInput | SocialLoginsScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"SocialLogins"> | number | $Types.Skip
    member_id?: IntWithAggregatesFilter<"SocialLogins"> | number | $Types.Skip
    provider?: StringWithAggregatesFilter<"SocialLogins"> | string | $Types.Skip
    provider_id?: StringWithAggregatesFilter<"SocialLogins"> | string | $Types.Skip
    access_token?: StringWithAggregatesFilter<"SocialLogins"> | string | $Types.Skip
    refresh_token?: StringNullableWithAggregatesFilter<"SocialLogins"> | string | null | $Types.Skip
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[] | $Types.Skip
    OR?: RefreshTokenWhereInput[] | $Types.Skip
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[] | $Types.Skip
    id?: IntFilter<"RefreshToken"> | number | $Types.Skip
    member_id?: IntFilter<"RefreshToken"> | number | $Types.Skip
    token?: StringFilter<"RefreshToken"> | string | $Types.Skip
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string | $Types.Skip
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string | $Types.Skip
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput> | $Types.Skip
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    token?: SortOrder | $Types.Skip
    expires_at?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    member?: MemberOrderByWithRelationInput | $Types.Skip
    _relevance?: RefreshTokenOrderByRelevanceInput | $Types.Skip
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[] | $Types.Skip
    OR?: RefreshTokenWhereInput[] | $Types.Skip
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[] | $Types.Skip
    member_id?: IntFilter<"RefreshToken"> | number | $Types.Skip
    token?: StringFilter<"RefreshToken"> | string | $Types.Skip
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string | $Types.Skip
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string | $Types.Skip
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput> | $Types.Skip
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    token?: SortOrder | $Types.Skip
    expires_at?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    _count?: RefreshTokenCountOrderByAggregateInput | $Types.Skip
    _avg?: RefreshTokenAvgOrderByAggregateInput | $Types.Skip
    _max?: RefreshTokenMaxOrderByAggregateInput | $Types.Skip
    _min?: RefreshTokenMinOrderByAggregateInput | $Types.Skip
    _sum?: RefreshTokenSumOrderByAggregateInput | $Types.Skip
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: RefreshTokenScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"RefreshToken"> | number | $Types.Skip
    member_id?: IntWithAggregatesFilter<"RefreshToken"> | number | $Types.Skip
    token?: StringWithAggregatesFilter<"RefreshToken"> | string | $Types.Skip
    expires_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string | $Types.Skip
  }

  export type MemberCreateInput = {
    username: string
    email: string
    password?: string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    RefreshToken?: RefreshTokenCreateNestedManyWithoutMemberInput | $Types.Skip
    socialLogins?: SocialLoginsCreateNestedManyWithoutMemberInput | $Types.Skip
  }

  export type MemberUncheckedCreateInput = {
    id?: number | $Types.Skip
    username: string
    email: string
    password?: string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutMemberInput | $Types.Skip
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutMemberInput | $Types.Skip
  }

  export type MemberUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    RefreshToken?: RefreshTokenUpdateManyWithoutMemberNestedInput | $Types.Skip
    socialLogins?: SocialLoginsUpdateManyWithoutMemberNestedInput | $Types.Skip
  }

  export type MemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutMemberNestedInput | $Types.Skip
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutMemberNestedInput | $Types.Skip
  }

  export type MemberCreateManyInput = {
    id?: number | $Types.Skip
    username: string
    email: string
    password?: string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type MemberUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type SocialLoginsCreateInput = {
    provider: string
    provider_id: string
    access_token: string
    refresh_token?: string | null | $Types.Skip
    member: MemberCreateNestedOneWithoutSocialLoginsInput
  }

  export type SocialLoginsUncheckedCreateInput = {
    id?: number | $Types.Skip
    member_id: number
    provider: string
    provider_id: string
    access_token: string
    refresh_token?: string | null | $Types.Skip
  }

  export type SocialLoginsUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    provider_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    access_token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member?: MemberUpdateOneRequiredWithoutSocialLoginsNestedInput | $Types.Skip
  }

  export type SocialLoginsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    provider_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    access_token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type SocialLoginsCreateManyInput = {
    id?: number | $Types.Skip
    member_id: number
    provider: string
    provider_id: string
    access_token: string
    refresh_token?: string | null | $Types.Skip
  }

  export type SocialLoginsUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    provider_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    access_token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type SocialLoginsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    provider_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    access_token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type RefreshTokenCreateInput = {
    token: string
    expires_at: Date | string
    created_at?: Date | string | $Types.Skip
    member: MemberCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number | $Types.Skip
    member_id: number
    token: string
    expires_at: Date | string
    created_at?: Date | string | $Types.Skip
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    member?: MemberUpdateOneRequiredWithoutRefreshTokenNestedInput | $Types.Skip
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type RefreshTokenCreateManyInput = {
    id?: number | $Types.Skip
    member_id: number
    token: string
    expires_at: Date | string
    created_at?: Date | string | $Types.Skip
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | $Types.Skip
    notIn?: number[] | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | $Types.Skip
    notIn?: string[] | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    search?: string | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | null | $Types.Skip
    notIn?: string[] | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    search?: string | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | $Types.Skip
    notIn?: Date[] | string[] | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput | $Types.Skip
    some?: RefreshTokenWhereInput | $Types.Skip
    none?: RefreshTokenWhereInput | $Types.Skip
  }

  export type SocialLoginsListRelationFilter = {
    every?: SocialLoginsWhereInput | $Types.Skip
    some?: SocialLoginsWhereInput | $Types.Skip
    none?: SocialLoginsWhereInput | $Types.Skip
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type SocialLoginsOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type MemberOrderByRelevanceInput = {
    fields: MemberOrderByRelevanceFieldEnum | MemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type MemberAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type MemberSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | $Types.Skip
    notIn?: number[] | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | $Types.Skip
    notIn?: string[] | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    search?: string | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | null | $Types.Skip
    notIn?: string[] | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    search?: string | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | $Types.Skip
    notIn?: Date[] | string[] | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput | $Types.Skip
    isNot?: MemberWhereInput | $Types.Skip
  }

  export type SocialLoginsOrderByRelevanceInput = {
    fields: SocialLoginsOrderByRelevanceFieldEnum | SocialLoginsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SocialLoginsProviderProvider_idCompoundUniqueInput = {
    provider: string
    provider_id: string
  }

  export type SocialLoginsCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    provider_id?: SortOrder | $Types.Skip
    access_token?: SortOrder | $Types.Skip
    refresh_token?: SortOrder | $Types.Skip
  }

  export type SocialLoginsAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type SocialLoginsMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    provider_id?: SortOrder | $Types.Skip
    access_token?: SortOrder | $Types.Skip
    refresh_token?: SortOrder | $Types.Skip
  }

  export type SocialLoginsMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    provider?: SortOrder | $Types.Skip
    provider_id?: SortOrder | $Types.Skip
    access_token?: SortOrder | $Types.Skip
    refresh_token?: SortOrder | $Types.Skip
  }

  export type SocialLoginsSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type RefreshTokenOrderByRelevanceInput = {
    fields: RefreshTokenOrderByRelevanceFieldEnum | RefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    token?: SortOrder | $Types.Skip
    expires_at?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    token?: SortOrder | $Types.Skip
    expires_at?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    token?: SortOrder | $Types.Skip
    expires_at?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type RefreshTokenCreateNestedManyWithoutMemberInput = {
    create?: XOR<RefreshTokenCreateWithoutMemberInput, RefreshTokenUncheckedCreateWithoutMemberInput> | RefreshTokenCreateWithoutMemberInput[] | RefreshTokenUncheckedCreateWithoutMemberInput[] | $Types.Skip
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutMemberInput | RefreshTokenCreateOrConnectWithoutMemberInput[] | $Types.Skip
    createMany?: RefreshTokenCreateManyMemberInputEnvelope | $Types.Skip
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
  }

  export type SocialLoginsCreateNestedManyWithoutMemberInput = {
    create?: XOR<SocialLoginsCreateWithoutMemberInput, SocialLoginsUncheckedCreateWithoutMemberInput> | SocialLoginsCreateWithoutMemberInput[] | SocialLoginsUncheckedCreateWithoutMemberInput[] | $Types.Skip
    connectOrCreate?: SocialLoginsCreateOrConnectWithoutMemberInput | SocialLoginsCreateOrConnectWithoutMemberInput[] | $Types.Skip
    createMany?: SocialLoginsCreateManyMemberInputEnvelope | $Types.Skip
    connect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<RefreshTokenCreateWithoutMemberInput, RefreshTokenUncheckedCreateWithoutMemberInput> | RefreshTokenCreateWithoutMemberInput[] | RefreshTokenUncheckedCreateWithoutMemberInput[] | $Types.Skip
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutMemberInput | RefreshTokenCreateOrConnectWithoutMemberInput[] | $Types.Skip
    createMany?: RefreshTokenCreateManyMemberInputEnvelope | $Types.Skip
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
  }

  export type SocialLoginsUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<SocialLoginsCreateWithoutMemberInput, SocialLoginsUncheckedCreateWithoutMemberInput> | SocialLoginsCreateWithoutMemberInput[] | SocialLoginsUncheckedCreateWithoutMemberInput[] | $Types.Skip
    connectOrCreate?: SocialLoginsCreateOrConnectWithoutMemberInput | SocialLoginsCreateOrConnectWithoutMemberInput[] | $Types.Skip
    createMany?: SocialLoginsCreateManyMemberInputEnvelope | $Types.Skip
    connect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string | $Types.Skip
  }

  export type RefreshTokenUpdateManyWithoutMemberNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutMemberInput, RefreshTokenUncheckedCreateWithoutMemberInput> | RefreshTokenCreateWithoutMemberInput[] | RefreshTokenUncheckedCreateWithoutMemberInput[] | $Types.Skip
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutMemberInput | RefreshTokenCreateOrConnectWithoutMemberInput[] | $Types.Skip
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutMemberInput | RefreshTokenUpsertWithWhereUniqueWithoutMemberInput[] | $Types.Skip
    createMany?: RefreshTokenCreateManyMemberInputEnvelope | $Types.Skip
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
    update?: RefreshTokenUpdateWithWhereUniqueWithoutMemberInput | RefreshTokenUpdateWithWhereUniqueWithoutMemberInput[] | $Types.Skip
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutMemberInput | RefreshTokenUpdateManyWithWhereWithoutMemberInput[] | $Types.Skip
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[] | $Types.Skip
  }

  export type SocialLoginsUpdateManyWithoutMemberNestedInput = {
    create?: XOR<SocialLoginsCreateWithoutMemberInput, SocialLoginsUncheckedCreateWithoutMemberInput> | SocialLoginsCreateWithoutMemberInput[] | SocialLoginsUncheckedCreateWithoutMemberInput[] | $Types.Skip
    connectOrCreate?: SocialLoginsCreateOrConnectWithoutMemberInput | SocialLoginsCreateOrConnectWithoutMemberInput[] | $Types.Skip
    upsert?: SocialLoginsUpsertWithWhereUniqueWithoutMemberInput | SocialLoginsUpsertWithWhereUniqueWithoutMemberInput[] | $Types.Skip
    createMany?: SocialLoginsCreateManyMemberInputEnvelope | $Types.Skip
    set?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
    disconnect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
    delete?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
    connect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
    update?: SocialLoginsUpdateWithWhereUniqueWithoutMemberInput | SocialLoginsUpdateWithWhereUniqueWithoutMemberInput[] | $Types.Skip
    updateMany?: SocialLoginsUpdateManyWithWhereWithoutMemberInput | SocialLoginsUpdateManyWithWhereWithoutMemberInput[] | $Types.Skip
    deleteMany?: SocialLoginsScalarWhereInput | SocialLoginsScalarWhereInput[] | $Types.Skip
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type RefreshTokenUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutMemberInput, RefreshTokenUncheckedCreateWithoutMemberInput> | RefreshTokenCreateWithoutMemberInput[] | RefreshTokenUncheckedCreateWithoutMemberInput[] | $Types.Skip
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutMemberInput | RefreshTokenCreateOrConnectWithoutMemberInput[] | $Types.Skip
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutMemberInput | RefreshTokenUpsertWithWhereUniqueWithoutMemberInput[] | $Types.Skip
    createMany?: RefreshTokenCreateManyMemberInputEnvelope | $Types.Skip
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[] | $Types.Skip
    update?: RefreshTokenUpdateWithWhereUniqueWithoutMemberInput | RefreshTokenUpdateWithWhereUniqueWithoutMemberInput[] | $Types.Skip
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutMemberInput | RefreshTokenUpdateManyWithWhereWithoutMemberInput[] | $Types.Skip
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[] | $Types.Skip
  }

  export type SocialLoginsUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<SocialLoginsCreateWithoutMemberInput, SocialLoginsUncheckedCreateWithoutMemberInput> | SocialLoginsCreateWithoutMemberInput[] | SocialLoginsUncheckedCreateWithoutMemberInput[] | $Types.Skip
    connectOrCreate?: SocialLoginsCreateOrConnectWithoutMemberInput | SocialLoginsCreateOrConnectWithoutMemberInput[] | $Types.Skip
    upsert?: SocialLoginsUpsertWithWhereUniqueWithoutMemberInput | SocialLoginsUpsertWithWhereUniqueWithoutMemberInput[] | $Types.Skip
    createMany?: SocialLoginsCreateManyMemberInputEnvelope | $Types.Skip
    set?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
    disconnect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
    delete?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
    connect?: SocialLoginsWhereUniqueInput | SocialLoginsWhereUniqueInput[] | $Types.Skip
    update?: SocialLoginsUpdateWithWhereUniqueWithoutMemberInput | SocialLoginsUpdateWithWhereUniqueWithoutMemberInput[] | $Types.Skip
    updateMany?: SocialLoginsUpdateManyWithWhereWithoutMemberInput | SocialLoginsUpdateManyWithWhereWithoutMemberInput[] | $Types.Skip
    deleteMany?: SocialLoginsScalarWhereInput | SocialLoginsScalarWhereInput[] | $Types.Skip
  }

  export type MemberCreateNestedOneWithoutSocialLoginsInput = {
    create?: XOR<MemberCreateWithoutSocialLoginsInput, MemberUncheckedCreateWithoutSocialLoginsInput> | $Types.Skip
    connectOrCreate?: MemberCreateOrConnectWithoutSocialLoginsInput | $Types.Skip
    connect?: MemberWhereUniqueInput | $Types.Skip
  }

  export type MemberUpdateOneRequiredWithoutSocialLoginsNestedInput = {
    create?: XOR<MemberCreateWithoutSocialLoginsInput, MemberUncheckedCreateWithoutSocialLoginsInput> | $Types.Skip
    connectOrCreate?: MemberCreateOrConnectWithoutSocialLoginsInput | $Types.Skip
    upsert?: MemberUpsertWithoutSocialLoginsInput | $Types.Skip
    connect?: MemberWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutSocialLoginsInput, MemberUpdateWithoutSocialLoginsInput>, MemberUncheckedUpdateWithoutSocialLoginsInput> | $Types.Skip
  }

  export type MemberCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<MemberCreateWithoutRefreshTokenInput, MemberUncheckedCreateWithoutRefreshTokenInput> | $Types.Skip
    connectOrCreate?: MemberCreateOrConnectWithoutRefreshTokenInput | $Types.Skip
    connect?: MemberWhereUniqueInput | $Types.Skip
  }

  export type MemberUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<MemberCreateWithoutRefreshTokenInput, MemberUncheckedCreateWithoutRefreshTokenInput> | $Types.Skip
    connectOrCreate?: MemberCreateOrConnectWithoutRefreshTokenInput | $Types.Skip
    upsert?: MemberUpsertWithoutRefreshTokenInput | $Types.Skip
    connect?: MemberWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutRefreshTokenInput, MemberUpdateWithoutRefreshTokenInput>, MemberUncheckedUpdateWithoutRefreshTokenInput> | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | $Types.Skip
    notIn?: number[] | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | $Types.Skip
    notIn?: string[] | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    search?: string | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | null | $Types.Skip
    notIn?: string[] | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    search?: string | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | $Types.Skip
    notIn?: Date[] | string[] | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | $Types.Skip
    notIn?: number[] | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | $Types.Skip
    notIn?: number[] | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | $Types.Skip
    notIn?: string[] | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    search?: string | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | null | $Types.Skip
    notIn?: string[] | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    search?: string | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | $Types.Skip
    notIn?: Date[] | string[] | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type RefreshTokenCreateWithoutMemberInput = {
    token: string
    expires_at: Date | string
    created_at?: Date | string | $Types.Skip
  }

  export type RefreshTokenUncheckedCreateWithoutMemberInput = {
    id?: number | $Types.Skip
    token: string
    expires_at: Date | string
    created_at?: Date | string | $Types.Skip
  }

  export type RefreshTokenCreateOrConnectWithoutMemberInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutMemberInput, RefreshTokenUncheckedCreateWithoutMemberInput>
  }

  export type RefreshTokenCreateManyMemberInputEnvelope = {
    data: RefreshTokenCreateManyMemberInput | RefreshTokenCreateManyMemberInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type SocialLoginsCreateWithoutMemberInput = {
    provider: string
    provider_id: string
    access_token: string
    refresh_token?: string | null | $Types.Skip
  }

  export type SocialLoginsUncheckedCreateWithoutMemberInput = {
    id?: number | $Types.Skip
    provider: string
    provider_id: string
    access_token: string
    refresh_token?: string | null | $Types.Skip
  }

  export type SocialLoginsCreateOrConnectWithoutMemberInput = {
    where: SocialLoginsWhereUniqueInput
    create: XOR<SocialLoginsCreateWithoutMemberInput, SocialLoginsUncheckedCreateWithoutMemberInput>
  }

  export type SocialLoginsCreateManyMemberInputEnvelope = {
    data: SocialLoginsCreateManyMemberInput | SocialLoginsCreateManyMemberInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutMemberInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutMemberInput, RefreshTokenUncheckedUpdateWithoutMemberInput>
    create: XOR<RefreshTokenCreateWithoutMemberInput, RefreshTokenUncheckedCreateWithoutMemberInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutMemberInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutMemberInput, RefreshTokenUncheckedUpdateWithoutMemberInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutMemberInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutMemberInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[] | $Types.Skip
    OR?: RefreshTokenScalarWhereInput[] | $Types.Skip
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"RefreshToken"> | number | $Types.Skip
    member_id?: IntFilter<"RefreshToken"> | number | $Types.Skip
    token?: StringFilter<"RefreshToken"> | string | $Types.Skip
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string | $Types.Skip
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string | $Types.Skip
  }

  export type SocialLoginsUpsertWithWhereUniqueWithoutMemberInput = {
    where: SocialLoginsWhereUniqueInput
    update: XOR<SocialLoginsUpdateWithoutMemberInput, SocialLoginsUncheckedUpdateWithoutMemberInput>
    create: XOR<SocialLoginsCreateWithoutMemberInput, SocialLoginsUncheckedCreateWithoutMemberInput>
  }

  export type SocialLoginsUpdateWithWhereUniqueWithoutMemberInput = {
    where: SocialLoginsWhereUniqueInput
    data: XOR<SocialLoginsUpdateWithoutMemberInput, SocialLoginsUncheckedUpdateWithoutMemberInput>
  }

  export type SocialLoginsUpdateManyWithWhereWithoutMemberInput = {
    where: SocialLoginsScalarWhereInput
    data: XOR<SocialLoginsUpdateManyMutationInput, SocialLoginsUncheckedUpdateManyWithoutMemberInput>
  }

  export type SocialLoginsScalarWhereInput = {
    AND?: SocialLoginsScalarWhereInput | SocialLoginsScalarWhereInput[] | $Types.Skip
    OR?: SocialLoginsScalarWhereInput[] | $Types.Skip
    NOT?: SocialLoginsScalarWhereInput | SocialLoginsScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"SocialLogins"> | number | $Types.Skip
    member_id?: IntFilter<"SocialLogins"> | number | $Types.Skip
    provider?: StringFilter<"SocialLogins"> | string | $Types.Skip
    provider_id?: StringFilter<"SocialLogins"> | string | $Types.Skip
    access_token?: StringFilter<"SocialLogins"> | string | $Types.Skip
    refresh_token?: StringNullableFilter<"SocialLogins"> | string | null | $Types.Skip
  }

  export type MemberCreateWithoutSocialLoginsInput = {
    username: string
    email: string
    password?: string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    RefreshToken?: RefreshTokenCreateNestedManyWithoutMemberInput | $Types.Skip
  }

  export type MemberUncheckedCreateWithoutSocialLoginsInput = {
    id?: number | $Types.Skip
    username: string
    email: string
    password?: string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutMemberInput | $Types.Skip
  }

  export type MemberCreateOrConnectWithoutSocialLoginsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutSocialLoginsInput, MemberUncheckedCreateWithoutSocialLoginsInput>
  }

  export type MemberUpsertWithoutSocialLoginsInput = {
    update: XOR<MemberUpdateWithoutSocialLoginsInput, MemberUncheckedUpdateWithoutSocialLoginsInput>
    create: XOR<MemberCreateWithoutSocialLoginsInput, MemberUncheckedCreateWithoutSocialLoginsInput>
    where?: MemberWhereInput | $Types.Skip
  }

  export type MemberUpdateToOneWithWhereWithoutSocialLoginsInput = {
    where?: MemberWhereInput | $Types.Skip
    data: XOR<MemberUpdateWithoutSocialLoginsInput, MemberUncheckedUpdateWithoutSocialLoginsInput>
  }

  export type MemberUpdateWithoutSocialLoginsInput = {
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    RefreshToken?: RefreshTokenUpdateManyWithoutMemberNestedInput | $Types.Skip
  }

  export type MemberUncheckedUpdateWithoutSocialLoginsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutMemberNestedInput | $Types.Skip
  }

  export type MemberCreateWithoutRefreshTokenInput = {
    username: string
    email: string
    password?: string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    socialLogins?: SocialLoginsCreateNestedManyWithoutMemberInput | $Types.Skip
  }

  export type MemberUncheckedCreateWithoutRefreshTokenInput = {
    id?: number | $Types.Skip
    username: string
    email: string
    password?: string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    socialLogins?: SocialLoginsUncheckedCreateNestedManyWithoutMemberInput | $Types.Skip
  }

  export type MemberCreateOrConnectWithoutRefreshTokenInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutRefreshTokenInput, MemberUncheckedCreateWithoutRefreshTokenInput>
  }

  export type MemberUpsertWithoutRefreshTokenInput = {
    update: XOR<MemberUpdateWithoutRefreshTokenInput, MemberUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<MemberCreateWithoutRefreshTokenInput, MemberUncheckedCreateWithoutRefreshTokenInput>
    where?: MemberWhereInput | $Types.Skip
  }

  export type MemberUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: MemberWhereInput | $Types.Skip
    data: XOR<MemberUpdateWithoutRefreshTokenInput, MemberUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type MemberUpdateWithoutRefreshTokenInput = {
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    socialLogins?: SocialLoginsUpdateManyWithoutMemberNestedInput | $Types.Skip
  }

  export type MemberUncheckedUpdateWithoutRefreshTokenInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    username?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    socialLogins?: SocialLoginsUncheckedUpdateManyWithoutMemberNestedInput | $Types.Skip
  }

  export type RefreshTokenCreateManyMemberInput = {
    id?: number | $Types.Skip
    token: string
    expires_at: Date | string
    created_at?: Date | string | $Types.Skip
  }

  export type SocialLoginsCreateManyMemberInput = {
    id?: number | $Types.Skip
    provider: string
    provider_id: string
    access_token: string
    refresh_token?: string | null | $Types.Skip
  }

  export type RefreshTokenUpdateWithoutMemberInput = {
    token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type RefreshTokenUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type RefreshTokenUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type SocialLoginsUpdateWithoutMemberInput = {
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    provider_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    access_token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type SocialLoginsUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    provider_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    access_token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type SocialLoginsUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    provider?: StringFieldUpdateOperationsInput | string | $Types.Skip
    provider_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    access_token?: StringFieldUpdateOperationsInput | string | $Types.Skip
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}