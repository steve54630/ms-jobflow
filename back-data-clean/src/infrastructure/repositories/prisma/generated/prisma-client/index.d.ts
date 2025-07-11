
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Job_offer
 * 
 */
export type Job_offer = $Result.DefaultSelection<Prisma.$Job_offerPayload>
/**
 * Model Job_search
 * 
 */
export type Job_search = $Result.DefaultSelection<Prisma.$Job_searchPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Mad_skill
 * 
 */
export type Mad_skill = $Result.DefaultSelection<Prisma.$Mad_skillPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Langue
 * 
 */
export type Langue = $Result.DefaultSelection<Prisma.$LanguePayload>
/**
 * Model Member_skill
 * 
 */
export type Member_skill = $Result.DefaultSelection<Prisma.$Member_skillPayload>
/**
 * Model Member_langue
 * 
 */
export type Member_langue = $Result.DefaultSelection<Prisma.$Member_languePayload>
/**
 * Model Member_offer
 * 
 */
export type Member_offer = $Result.DefaultSelection<Prisma.$Member_offerPayload>
/**
 * Model Candidacy
 * 
 */
export type Candidacy = $Result.DefaultSelection<Prisma.$CandidacyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Skills: {
  hard: 'hard',
  soft: 'soft'
};

export type Skills = (typeof Skills)[keyof typeof Skills]


export const MadSkills: {
  interest: 'interest',
  hobbies: 'hobbies'
};

export type MadSkills = (typeof MadSkills)[keyof typeof MadSkills]


export const Status: {
  prepared: 'prepared',
  pending: 'pending',
  interview_planned: 'interview_planned',
  refused: 'refused'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Skills = $Enums.Skills

export const Skills: typeof $Enums.Skills

export type MadSkills = $Enums.MadSkills

export const MadSkills: typeof $Enums.MadSkills

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
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
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_offer`: Exposes CRUD operations for the **Job_offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_offers
    * const job_offers = await prisma.job_offer.findMany()
    * ```
    */
  get job_offer(): Prisma.Job_offerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_search`: Exposes CRUD operations for the **Job_search** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_searches
    * const job_searches = await prisma.job_search.findMany()
    * ```
    */
  get job_search(): Prisma.Job_searchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mad_skill`: Exposes CRUD operations for the **Mad_skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mad_skills
    * const mad_skills = await prisma.mad_skill.findMany()
    * ```
    */
  get mad_skill(): Prisma.Mad_skillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.langue`: Exposes CRUD operations for the **Langue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Langues
    * const langues = await prisma.langue.findMany()
    * ```
    */
  get langue(): Prisma.LangueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member_skill`: Exposes CRUD operations for the **Member_skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Member_skills
    * const member_skills = await prisma.member_skill.findMany()
    * ```
    */
  get member_skill(): Prisma.Member_skillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member_langue`: Exposes CRUD operations for the **Member_langue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Member_langues
    * const member_langues = await prisma.member_langue.findMany()
    * ```
    */
  get member_langue(): Prisma.Member_langueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member_offer`: Exposes CRUD operations for the **Member_offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Member_offers
    * const member_offers = await prisma.member_offer.findMany()
    * ```
    */
  get member_offer(): Prisma.Member_offerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidacy`: Exposes CRUD operations for the **Candidacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidacies
    * const candidacies = await prisma.candidacy.findMany()
    * ```
    */
  get candidacy(): Prisma.CandidacyDelegate<ExtArgs, ClientOptions>;
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
    Profile: 'Profile',
    Job_offer: 'Job_offer',
    Job_search: 'Job_search',
    Event: 'Event',
    Experience: 'Experience',
    Education: 'Education',
    Skill: 'Skill',
    Mad_skill: 'Mad_skill',
    Activity: 'Activity',
    Langue: 'Langue',
    Member_skill: 'Member_skill',
    Member_langue: 'Member_langue',
    Member_offer: 'Member_offer',
    Candidacy: 'Candidacy'
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
      modelProps: "profile" | "job_offer" | "job_search" | "event" | "experience" | "education" | "skill" | "mad_skill" | "activity" | "langue" | "member_skill" | "member_langue" | "member_offer" | "candidacy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Job_offer: {
        payload: Prisma.$Job_offerPayload<ExtArgs>
        fields: Prisma.Job_offerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Job_offerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Job_offerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          findFirst: {
            args: Prisma.Job_offerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Job_offerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          findMany: {
            args: Prisma.Job_offerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>[]
          }
          create: {
            args: Prisma.Job_offerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          createMany: {
            args: Prisma.Job_offerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Job_offerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          update: {
            args: Prisma.Job_offerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          deleteMany: {
            args: Prisma.Job_offerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Job_offerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Job_offerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          aggregate: {
            args: Prisma.Job_offerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_offer>
          }
          groupBy: {
            args: Prisma.Job_offerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_offerGroupByOutputType>[]
          }
          count: {
            args: Prisma.Job_offerCountArgs<ExtArgs>
            result: $Utils.Optional<Job_offerCountAggregateOutputType> | number
          }
        }
      }
      Job_search: {
        payload: Prisma.$Job_searchPayload<ExtArgs>
        fields: Prisma.Job_searchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Job_searchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_searchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Job_searchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_searchPayload>
          }
          findFirst: {
            args: Prisma.Job_searchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_searchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Job_searchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_searchPayload>
          }
          findMany: {
            args: Prisma.Job_searchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_searchPayload>[]
          }
          create: {
            args: Prisma.Job_searchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_searchPayload>
          }
          createMany: {
            args: Prisma.Job_searchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Job_searchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_searchPayload>
          }
          update: {
            args: Prisma.Job_searchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_searchPayload>
          }
          deleteMany: {
            args: Prisma.Job_searchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Job_searchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Job_searchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_searchPayload>
          }
          aggregate: {
            args: Prisma.Job_searchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_search>
          }
          groupBy: {
            args: Prisma.Job_searchGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_searchGroupByOutputType>[]
          }
          count: {
            args: Prisma.Job_searchCountArgs<ExtArgs>
            result: $Utils.Optional<Job_searchCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Mad_skill: {
        payload: Prisma.$Mad_skillPayload<ExtArgs>
        fields: Prisma.Mad_skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Mad_skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Mad_skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Mad_skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Mad_skillPayload>
          }
          findFirst: {
            args: Prisma.Mad_skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Mad_skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Mad_skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Mad_skillPayload>
          }
          findMany: {
            args: Prisma.Mad_skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Mad_skillPayload>[]
          }
          create: {
            args: Prisma.Mad_skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Mad_skillPayload>
          }
          createMany: {
            args: Prisma.Mad_skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Mad_skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Mad_skillPayload>
          }
          update: {
            args: Prisma.Mad_skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Mad_skillPayload>
          }
          deleteMany: {
            args: Prisma.Mad_skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Mad_skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Mad_skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Mad_skillPayload>
          }
          aggregate: {
            args: Prisma.Mad_skillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMad_skill>
          }
          groupBy: {
            args: Prisma.Mad_skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mad_skillGroupByOutputType>[]
          }
          count: {
            args: Prisma.Mad_skillCountArgs<ExtArgs>
            result: $Utils.Optional<Mad_skillCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Langue: {
        payload: Prisma.$LanguePayload<ExtArgs>
        fields: Prisma.LangueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LangueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LangueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguePayload>
          }
          findFirst: {
            args: Prisma.LangueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LangueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguePayload>
          }
          findMany: {
            args: Prisma.LangueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguePayload>[]
          }
          create: {
            args: Prisma.LangueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguePayload>
          }
          createMany: {
            args: Prisma.LangueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LangueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguePayload>
          }
          update: {
            args: Prisma.LangueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguePayload>
          }
          deleteMany: {
            args: Prisma.LangueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LangueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LangueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguePayload>
          }
          aggregate: {
            args: Prisma.LangueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLangue>
          }
          groupBy: {
            args: Prisma.LangueGroupByArgs<ExtArgs>
            result: $Utils.Optional<LangueGroupByOutputType>[]
          }
          count: {
            args: Prisma.LangueCountArgs<ExtArgs>
            result: $Utils.Optional<LangueCountAggregateOutputType> | number
          }
        }
      }
      Member_skill: {
        payload: Prisma.$Member_skillPayload<ExtArgs>
        fields: Prisma.Member_skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Member_skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Member_skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_skillPayload>
          }
          findFirst: {
            args: Prisma.Member_skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Member_skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_skillPayload>
          }
          findMany: {
            args: Prisma.Member_skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_skillPayload>[]
          }
          create: {
            args: Prisma.Member_skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_skillPayload>
          }
          createMany: {
            args: Prisma.Member_skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Member_skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_skillPayload>
          }
          update: {
            args: Prisma.Member_skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_skillPayload>
          }
          deleteMany: {
            args: Prisma.Member_skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Member_skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Member_skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_skillPayload>
          }
          aggregate: {
            args: Prisma.Member_skillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember_skill>
          }
          groupBy: {
            args: Prisma.Member_skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<Member_skillGroupByOutputType>[]
          }
          count: {
            args: Prisma.Member_skillCountArgs<ExtArgs>
            result: $Utils.Optional<Member_skillCountAggregateOutputType> | number
          }
        }
      }
      Member_langue: {
        payload: Prisma.$Member_languePayload<ExtArgs>
        fields: Prisma.Member_langueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Member_langueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_languePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Member_langueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_languePayload>
          }
          findFirst: {
            args: Prisma.Member_langueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_languePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Member_langueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_languePayload>
          }
          findMany: {
            args: Prisma.Member_langueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_languePayload>[]
          }
          create: {
            args: Prisma.Member_langueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_languePayload>
          }
          createMany: {
            args: Prisma.Member_langueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Member_langueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_languePayload>
          }
          update: {
            args: Prisma.Member_langueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_languePayload>
          }
          deleteMany: {
            args: Prisma.Member_langueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Member_langueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Member_langueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_languePayload>
          }
          aggregate: {
            args: Prisma.Member_langueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember_langue>
          }
          groupBy: {
            args: Prisma.Member_langueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Member_langueGroupByOutputType>[]
          }
          count: {
            args: Prisma.Member_langueCountArgs<ExtArgs>
            result: $Utils.Optional<Member_langueCountAggregateOutputType> | number
          }
        }
      }
      Member_offer: {
        payload: Prisma.$Member_offerPayload<ExtArgs>
        fields: Prisma.Member_offerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Member_offerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_offerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Member_offerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_offerPayload>
          }
          findFirst: {
            args: Prisma.Member_offerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_offerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Member_offerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_offerPayload>
          }
          findMany: {
            args: Prisma.Member_offerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_offerPayload>[]
          }
          create: {
            args: Prisma.Member_offerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_offerPayload>
          }
          createMany: {
            args: Prisma.Member_offerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Member_offerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_offerPayload>
          }
          update: {
            args: Prisma.Member_offerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_offerPayload>
          }
          deleteMany: {
            args: Prisma.Member_offerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Member_offerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Member_offerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_offerPayload>
          }
          aggregate: {
            args: Prisma.Member_offerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember_offer>
          }
          groupBy: {
            args: Prisma.Member_offerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Member_offerGroupByOutputType>[]
          }
          count: {
            args: Prisma.Member_offerCountArgs<ExtArgs>
            result: $Utils.Optional<Member_offerCountAggregateOutputType> | number
          }
        }
      }
      Candidacy: {
        payload: Prisma.$CandidacyPayload<ExtArgs>
        fields: Prisma.CandidacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidacyPayload>
          }
          findFirst: {
            args: Prisma.CandidacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidacyPayload>
          }
          findMany: {
            args: Prisma.CandidacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidacyPayload>[]
          }
          create: {
            args: Prisma.CandidacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidacyPayload>
          }
          createMany: {
            args: Prisma.CandidacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CandidacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidacyPayload>
          }
          update: {
            args: Prisma.CandidacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidacyPayload>
          }
          deleteMany: {
            args: Prisma.CandidacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CandidacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidacyPayload>
          }
          aggregate: {
            args: Prisma.CandidacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidacy>
          }
          groupBy: {
            args: Prisma.CandidacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidacyCountArgs<ExtArgs>
            result: $Utils.Optional<CandidacyCountAggregateOutputType> | number
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
    profile?: ProfileOmit
    job_offer?: Job_offerOmit
    job_search?: Job_searchOmit
    event?: EventOmit
    experience?: ExperienceOmit
    education?: EducationOmit
    skill?: SkillOmit
    mad_skill?: Mad_skillOmit
    activity?: ActivityOmit
    langue?: LangueOmit
    member_skill?: Member_skillOmit
    member_langue?: Member_langueOmit
    member_offer?: Member_offerOmit
    candidacy?: CandidacyOmit
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
   * Count Type Job_offerCountOutputType
   */

  export type Job_offerCountOutputType = {
    Member_offer: number
    Candidacy: number
  }

  export type Job_offerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member_offer?: boolean | Job_offerCountOutputTypeCountMember_offerArgs
    Candidacy?: boolean | Job_offerCountOutputTypeCountCandidacyArgs
  }

  // Custom InputTypes
  /**
   * Job_offerCountOutputType without action
   */
  export type Job_offerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offerCountOutputType
     */
    select?: Job_offerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Job_offerCountOutputType without action
   */
  export type Job_offerCountOutputTypeCountMember_offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Member_offerWhereInput | $Types.Skip
  }

  /**
   * Job_offerCountOutputType without action
   */
  export type Job_offerCountOutputTypeCountCandidacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidacyWhereInput | $Types.Skip
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    Member_skill: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member_skill?: boolean | SkillCountOutputTypeCountMember_skillArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountMember_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Member_skillWhereInput | $Types.Skip
  }


  /**
   * Count Type LangueCountOutputType
   */

  export type LangueCountOutputType = {
    Member_langue: number
  }

  export type LangueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member_langue?: boolean | LangueCountOutputTypeCountMember_langueArgs
  }

  // Custom InputTypes
  /**
   * LangueCountOutputType without action
   */
  export type LangueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LangueCountOutputType
     */
    select?: LangueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LangueCountOutputType without action
   */
  export type LangueCountOutputTypeCountMember_langueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Member_langueWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    picture: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    location: string | null
    has_car: boolean | null
    description: string | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    picture: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    location: string | null
    has_car: boolean | null
    description: string | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    picture: number
    firstname: number
    lastname: number
    email: number
    phone: number
    location: number
    has_car: number
    description: number
    member_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type ProfileSumAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type ProfileMinAggregateInputType = {
    id?: true | $Types.Skip
    picture?: true | $Types.Skip
    firstname?: true | $Types.Skip
    lastname?: true | $Types.Skip
    email?: true | $Types.Skip
    phone?: true | $Types.Skip
    location?: true | $Types.Skip
    has_car?: true | $Types.Skip
    description?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type ProfileMaxAggregateInputType = {
    id?: true | $Types.Skip
    picture?: true | $Types.Skip
    firstname?: true | $Types.Skip
    lastname?: true | $Types.Skip
    email?: true | $Types.Skip
    phone?: true | $Types.Skip
    location?: true | $Types.Skip
    has_car?: true | $Types.Skip
    description?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type ProfileCountAggregateInputType = {
    id?: true | $Types.Skip
    picture?: true | $Types.Skip
    firstname?: true | $Types.Skip
    lastname?: true | $Types.Skip
    email?: true | $Types.Skip
    phone?: true | $Types.Skip
    location?: true | $Types.Skip
    has_car?: true | $Types.Skip
    description?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput | $Types.Skip
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[] | $Types.Skip
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    picture: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    location: string | null
    has_car: boolean
    description: string | null
    member_id: number
    created_at: Date
    updated_at: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    picture?: boolean | $Types.Skip
    firstname?: boolean | $Types.Skip
    lastname?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    has_car?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }, ExtArgs["result"]["profile"]>



  export type ProfileSelectScalar = {
    id?: boolean | $Types.Skip
    picture?: boolean | $Types.Skip
    firstname?: boolean | $Types.Skip
    lastname?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    has_car?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "picture" | "firstname" | "lastname" | "email" | "phone" | "location" | "has_car" | "description" | "member_id" | "created_at" | "updated_at", ExtArgs["result"]["profile"], $Types.Skip>

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      picture: string | null
      firstname: string | null
      lastname: string | null
      email: string | null
      phone: string | null
      location: string | null
      has_car: boolean
      description: string | null
      member_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly picture: FieldRef<"Profile", 'String'>
    readonly firstname: FieldRef<"Profile", 'String'>
    readonly lastname: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly location: FieldRef<"Profile", 'String'>
    readonly has_car: FieldRef<"Profile", 'Boolean'>
    readonly description: FieldRef<"Profile", 'String'>
    readonly member_id: FieldRef<"Profile", 'Int'>
    readonly created_at: FieldRef<"Profile", 'DateTime'>
    readonly updated_at: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number | $Types.Skip
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * Limit how many Profiles to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
  }


  /**
   * Model Job_offer
   */

  export type AggregateJob_offer = {
    _count: Job_offerCountAggregateOutputType | null
    _avg: Job_offerAvgAggregateOutputType | null
    _sum: Job_offerSumAggregateOutputType | null
    _min: Job_offerMinAggregateOutputType | null
    _max: Job_offerMaxAggregateOutputType | null
  }

  export type Job_offerAvgAggregateOutputType = {
    id: number | null
  }

  export type Job_offerSumAggregateOutputType = {
    id: number | null
  }

  export type Job_offerMinAggregateOutputType = {
    id: number | null
    title: string | null
    ftid: string | null
    location: string | null
    contract_type: string | null
    experience_length: string | null
    professional_field: string | null
    work_time: string | null
    salary: string | null
    handy_friendly: boolean | null
    description: string | null
    update_ft: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Job_offerMaxAggregateOutputType = {
    id: number | null
    title: string | null
    ftid: string | null
    location: string | null
    contract_type: string | null
    experience_length: string | null
    professional_field: string | null
    work_time: string | null
    salary: string | null
    handy_friendly: boolean | null
    description: string | null
    update_ft: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Job_offerCountAggregateOutputType = {
    id: number
    title: number
    ftid: number
    location: number
    contract_type: number
    experience_length: number
    professional_field: number
    work_time: number
    salary: number
    handy_friendly: number
    description: number
    update_ft: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Job_offerAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type Job_offerSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type Job_offerMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    ftid?: true | $Types.Skip
    location?: true | $Types.Skip
    contract_type?: true | $Types.Skip
    experience_length?: true | $Types.Skip
    professional_field?: true | $Types.Skip
    work_time?: true | $Types.Skip
    salary?: true | $Types.Skip
    handy_friendly?: true | $Types.Skip
    description?: true | $Types.Skip
    update_ft?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type Job_offerMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    ftid?: true | $Types.Skip
    location?: true | $Types.Skip
    contract_type?: true | $Types.Skip
    experience_length?: true | $Types.Skip
    professional_field?: true | $Types.Skip
    work_time?: true | $Types.Skip
    salary?: true | $Types.Skip
    handy_friendly?: true | $Types.Skip
    description?: true | $Types.Skip
    update_ft?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type Job_offerCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    ftid?: true | $Types.Skip
    location?: true | $Types.Skip
    contract_type?: true | $Types.Skip
    experience_length?: true | $Types.Skip
    professional_field?: true | $Types.Skip
    work_time?: true | $Types.Skip
    salary?: true | $Types.Skip
    handy_friendly?: true | $Types.Skip
    description?: true | $Types.Skip
    update_ft?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type Job_offerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_offer to aggregate.
     */
    where?: Job_offerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_offers to fetch.
     */
    orderBy?: Job_offerOrderByWithRelationInput | Job_offerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Job_offerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_offers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_offers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Job_offers
    **/
    _count?: true | Job_offerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_offerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_offerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_offerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_offerMaxAggregateInputType
  }

  export type GetJob_offerAggregateType<T extends Job_offerAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_offer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_offer[P]>
      : GetScalarType<T[P], AggregateJob_offer[P]>
  }




  export type Job_offerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_offerWhereInput | $Types.Skip
    orderBy?: Job_offerOrderByWithAggregationInput | Job_offerOrderByWithAggregationInput[] | $Types.Skip
    by: Job_offerScalarFieldEnum[] | Job_offerScalarFieldEnum
    having?: Job_offerScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: Job_offerCountAggregateInputType | true
    _avg?: Job_offerAvgAggregateInputType
    _sum?: Job_offerSumAggregateInputType
    _min?: Job_offerMinAggregateInputType
    _max?: Job_offerMaxAggregateInputType
  }

  export type Job_offerGroupByOutputType = {
    id: number
    title: string
    ftid: string
    location: string | null
    contract_type: string | null
    experience_length: string | null
    professional_field: string | null
    work_time: string | null
    salary: string | null
    handy_friendly: boolean | null
    description: string
    update_ft: Date | null
    created_at: Date
    updated_at: Date
    _count: Job_offerCountAggregateOutputType | null
    _avg: Job_offerAvgAggregateOutputType | null
    _sum: Job_offerSumAggregateOutputType | null
    _min: Job_offerMinAggregateOutputType | null
    _max: Job_offerMaxAggregateOutputType | null
  }

  type GetJob_offerGroupByPayload<T extends Job_offerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_offerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_offerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_offerGroupByOutputType[P]>
            : GetScalarType<T[P], Job_offerGroupByOutputType[P]>
        }
      >
    >


  export type Job_offerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    ftid?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    contract_type?: boolean | $Types.Skip
    experience_length?: boolean | $Types.Skip
    professional_field?: boolean | $Types.Skip
    work_time?: boolean | $Types.Skip
    salary?: boolean | $Types.Skip
    handy_friendly?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    update_ft?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    Member_offer?: boolean | Job_offer$Member_offerArgs<ExtArgs> | $Types.Skip
    Candidacy?: boolean | Job_offer$CandidacyArgs<ExtArgs> | $Types.Skip
    _count?: boolean | Job_offerCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["job_offer"]>



  export type Job_offerSelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    ftid?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    contract_type?: boolean | $Types.Skip
    experience_length?: boolean | $Types.Skip
    professional_field?: boolean | $Types.Skip
    work_time?: boolean | $Types.Skip
    salary?: boolean | $Types.Skip
    handy_friendly?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    update_ft?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type Job_offerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "ftid" | "location" | "contract_type" | "experience_length" | "professional_field" | "work_time" | "salary" | "handy_friendly" | "description" | "update_ft" | "created_at" | "updated_at", ExtArgs["result"]["job_offer"], $Types.Skip>
  export type Job_offerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member_offer?: boolean | Job_offer$Member_offerArgs<ExtArgs> | $Types.Skip
    Candidacy?: boolean | Job_offer$CandidacyArgs<ExtArgs> | $Types.Skip
    _count?: boolean | Job_offerCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $Job_offerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job_offer"
    objects: {
      Member_offer: Prisma.$Member_offerPayload<ExtArgs>[]
      Candidacy: Prisma.$CandidacyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      ftid: string
      location: string | null
      contract_type: string | null
      experience_length: string | null
      professional_field: string | null
      work_time: string | null
      salary: string | null
      handy_friendly: boolean | null
      description: string
      update_ft: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["job_offer"]>
    composites: {}
  }

  type Job_offerGetPayload<S extends boolean | null | undefined | Job_offerDefaultArgs> = $Result.GetResult<Prisma.$Job_offerPayload, S>

  type Job_offerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Job_offerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_offerCountAggregateInputType | true
    }

  export interface Job_offerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job_offer'], meta: { name: 'Job_offer' } }
    /**
     * Find zero or one Job_offer that matches the filter.
     * @param {Job_offerFindUniqueArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Job_offerFindUniqueArgs>(args: SelectSubset<T, Job_offerFindUniqueArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Job_offerFindUniqueOrThrowArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Job_offerFindUniqueOrThrowArgs>(args: SelectSubset<T, Job_offerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerFindFirstArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Job_offerFindFirstArgs>(args?: SelectSubset<T, Job_offerFindFirstArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerFindFirstOrThrowArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Job_offerFindFirstOrThrowArgs>(args?: SelectSubset<T, Job_offerFindFirstOrThrowArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_offers
     * const job_offers = await prisma.job_offer.findMany()
     * 
     * // Get first 10 Job_offers
     * const job_offers = await prisma.job_offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_offerWithIdOnly = await prisma.job_offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Job_offerFindManyArgs>(args?: SelectSubset<T, Job_offerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_offer.
     * @param {Job_offerCreateArgs} args - Arguments to create a Job_offer.
     * @example
     * // Create one Job_offer
     * const Job_offer = await prisma.job_offer.create({
     *   data: {
     *     // ... data to create a Job_offer
     *   }
     * })
     * 
     */
    create<T extends Job_offerCreateArgs>(args: SelectSubset<T, Job_offerCreateArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_offers.
     * @param {Job_offerCreateManyArgs} args - Arguments to create many Job_offers.
     * @example
     * // Create many Job_offers
     * const job_offer = await prisma.job_offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Job_offerCreateManyArgs>(args?: SelectSubset<T, Job_offerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_offer.
     * @param {Job_offerDeleteArgs} args - Arguments to delete one Job_offer.
     * @example
     * // Delete one Job_offer
     * const Job_offer = await prisma.job_offer.delete({
     *   where: {
     *     // ... filter to delete one Job_offer
     *   }
     * })
     * 
     */
    delete<T extends Job_offerDeleteArgs>(args: SelectSubset<T, Job_offerDeleteArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_offer.
     * @param {Job_offerUpdateArgs} args - Arguments to update one Job_offer.
     * @example
     * // Update one Job_offer
     * const job_offer = await prisma.job_offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Job_offerUpdateArgs>(args: SelectSubset<T, Job_offerUpdateArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_offers.
     * @param {Job_offerDeleteManyArgs} args - Arguments to filter Job_offers to delete.
     * @example
     * // Delete a few Job_offers
     * const { count } = await prisma.job_offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Job_offerDeleteManyArgs>(args?: SelectSubset<T, Job_offerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_offers
     * const job_offer = await prisma.job_offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Job_offerUpdateManyArgs>(args: SelectSubset<T, Job_offerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_offer.
     * @param {Job_offerUpsertArgs} args - Arguments to update or create a Job_offer.
     * @example
     * // Update or create a Job_offer
     * const job_offer = await prisma.job_offer.upsert({
     *   create: {
     *     // ... data to create a Job_offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_offer we want to update
     *   }
     * })
     */
    upsert<T extends Job_offerUpsertArgs>(args: SelectSubset<T, Job_offerUpsertArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerCountArgs} args - Arguments to filter Job_offers to count.
     * @example
     * // Count the number of Job_offers
     * const count = await prisma.job_offer.count({
     *   where: {
     *     // ... the filter for the Job_offers we want to count
     *   }
     * })
    **/
    count<T extends Job_offerCountArgs>(
      args?: Subset<T, Job_offerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_offerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_offerAggregateArgs>(args: Subset<T, Job_offerAggregateArgs>): Prisma.PrismaPromise<GetJob_offerAggregateType<T>>

    /**
     * Group by Job_offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerGroupByArgs} args - Group by arguments.
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
      T extends Job_offerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Job_offerGroupByArgs['orderBy'] }
        : { orderBy?: Job_offerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Job_offerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_offerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job_offer model
   */
  readonly fields: Job_offerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job_offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Job_offerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Member_offer<T extends Job_offer$Member_offerArgs<ExtArgs> = {}>(args?: Subset<T, Job_offer$Member_offerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Candidacy<T extends Job_offer$CandidacyArgs<ExtArgs> = {}>(args?: Subset<T, Job_offer$CandidacyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Job_offer model
   */
  interface Job_offerFieldRefs {
    readonly id: FieldRef<"Job_offer", 'Int'>
    readonly title: FieldRef<"Job_offer", 'String'>
    readonly ftid: FieldRef<"Job_offer", 'String'>
    readonly location: FieldRef<"Job_offer", 'String'>
    readonly contract_type: FieldRef<"Job_offer", 'String'>
    readonly experience_length: FieldRef<"Job_offer", 'String'>
    readonly professional_field: FieldRef<"Job_offer", 'String'>
    readonly work_time: FieldRef<"Job_offer", 'String'>
    readonly salary: FieldRef<"Job_offer", 'String'>
    readonly handy_friendly: FieldRef<"Job_offer", 'Boolean'>
    readonly description: FieldRef<"Job_offer", 'String'>
    readonly update_ft: FieldRef<"Job_offer", 'DateTime'>
    readonly created_at: FieldRef<"Job_offer", 'DateTime'>
    readonly updated_at: FieldRef<"Job_offer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job_offer findUnique
   */
  export type Job_offerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offer to fetch.
     */
    where: Job_offerWhereUniqueInput
  }

  /**
   * Job_offer findUniqueOrThrow
   */
  export type Job_offerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offer to fetch.
     */
    where: Job_offerWhereUniqueInput
  }

  /**
   * Job_offer findFirst
   */
  export type Job_offerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offer to fetch.
     */
    where?: Job_offerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_offers to fetch.
     */
    orderBy?: Job_offerOrderByWithRelationInput | Job_offerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_offers.
     */
    cursor?: Job_offerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_offers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_offers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_offers.
     */
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Job_offer findFirstOrThrow
   */
  export type Job_offerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offer to fetch.
     */
    where?: Job_offerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_offers to fetch.
     */
    orderBy?: Job_offerOrderByWithRelationInput | Job_offerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_offers.
     */
    cursor?: Job_offerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_offers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_offers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_offers.
     */
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Job_offer findMany
   */
  export type Job_offerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offers to fetch.
     */
    where?: Job_offerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_offers to fetch.
     */
    orderBy?: Job_offerOrderByWithRelationInput | Job_offerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Job_offers.
     */
    cursor?: Job_offerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_offers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_offers.
     */
    skip?: number | $Types.Skip
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Job_offer create
   */
  export type Job_offerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * The data needed to create a Job_offer.
     */
    data: XOR<Job_offerCreateInput, Job_offerUncheckedCreateInput>
  }

  /**
   * Job_offer createMany
   */
  export type Job_offerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Job_offers.
     */
    data: Job_offerCreateManyInput | Job_offerCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Job_offer update
   */
  export type Job_offerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * The data needed to update a Job_offer.
     */
    data: XOR<Job_offerUpdateInput, Job_offerUncheckedUpdateInput>
    /**
     * Choose, which Job_offer to update.
     */
    where: Job_offerWhereUniqueInput
  }

  /**
   * Job_offer updateMany
   */
  export type Job_offerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Job_offers.
     */
    data: XOR<Job_offerUpdateManyMutationInput, Job_offerUncheckedUpdateManyInput>
    /**
     * Filter which Job_offers to update
     */
    where?: Job_offerWhereInput | $Types.Skip
    /**
     * Limit how many Job_offers to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Job_offer upsert
   */
  export type Job_offerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * The filter to search for the Job_offer to update in case it exists.
     */
    where: Job_offerWhereUniqueInput
    /**
     * In case the Job_offer found by the `where` argument doesn't exist, create a new Job_offer with this data.
     */
    create: XOR<Job_offerCreateInput, Job_offerUncheckedCreateInput>
    /**
     * In case the Job_offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Job_offerUpdateInput, Job_offerUncheckedUpdateInput>
  }

  /**
   * Job_offer delete
   */
  export type Job_offerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter which Job_offer to delete.
     */
    where: Job_offerWhereUniqueInput
  }

  /**
   * Job_offer deleteMany
   */
  export type Job_offerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_offers to delete
     */
    where?: Job_offerWhereInput | $Types.Skip
    /**
     * Limit how many Job_offers to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Job_offer.Member_offer
   */
  export type Job_offer$Member_offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    where?: Member_offerWhereInput | $Types.Skip
    orderBy?: Member_offerOrderByWithRelationInput | Member_offerOrderByWithRelationInput[] | $Types.Skip
    cursor?: Member_offerWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: Member_offerScalarFieldEnum | Member_offerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Job_offer.Candidacy
   */
  export type Job_offer$CandidacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    where?: CandidacyWhereInput | $Types.Skip
    orderBy?: CandidacyOrderByWithRelationInput | CandidacyOrderByWithRelationInput[] | $Types.Skip
    cursor?: CandidacyWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CandidacyScalarFieldEnum | CandidacyScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Job_offer without action
   */
  export type Job_offerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
  }


  /**
   * Model Job_search
   */

  export type AggregateJob_search = {
    _count: Job_searchCountAggregateOutputType | null
    _avg: Job_searchAvgAggregateOutputType | null
    _sum: Job_searchSumAggregateOutputType | null
    _min: Job_searchMinAggregateOutputType | null
    _max: Job_searchMaxAggregateOutputType | null
  }

  export type Job_searchAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type Job_searchSumAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type Job_searchMinAggregateOutputType = {
    id: number | null
    title: string | null
    search_field: string | null
    city: string | null
    departement: string | null
    contract_type: string | null
    experience: string | null
    professional_field: string | null
    work_time: string | null
    salary: string | null
    handy_friendly: boolean | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Job_searchMaxAggregateOutputType = {
    id: number | null
    title: string | null
    search_field: string | null
    city: string | null
    departement: string | null
    contract_type: string | null
    experience: string | null
    professional_field: string | null
    work_time: string | null
    salary: string | null
    handy_friendly: boolean | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Job_searchCountAggregateOutputType = {
    id: number
    title: number
    search_field: number
    city: number
    departement: number
    contract_type: number
    experience: number
    professional_field: number
    work_time: number
    salary: number
    handy_friendly: number
    member_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Job_searchAvgAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type Job_searchSumAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type Job_searchMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    search_field?: true | $Types.Skip
    city?: true | $Types.Skip
    departement?: true | $Types.Skip
    contract_type?: true | $Types.Skip
    experience?: true | $Types.Skip
    professional_field?: true | $Types.Skip
    work_time?: true | $Types.Skip
    salary?: true | $Types.Skip
    handy_friendly?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type Job_searchMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    search_field?: true | $Types.Skip
    city?: true | $Types.Skip
    departement?: true | $Types.Skip
    contract_type?: true | $Types.Skip
    experience?: true | $Types.Skip
    professional_field?: true | $Types.Skip
    work_time?: true | $Types.Skip
    salary?: true | $Types.Skip
    handy_friendly?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type Job_searchCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    search_field?: true | $Types.Skip
    city?: true | $Types.Skip
    departement?: true | $Types.Skip
    contract_type?: true | $Types.Skip
    experience?: true | $Types.Skip
    professional_field?: true | $Types.Skip
    work_time?: true | $Types.Skip
    salary?: true | $Types.Skip
    handy_friendly?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type Job_searchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_search to aggregate.
     */
    where?: Job_searchWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_searches to fetch.
     */
    orderBy?: Job_searchOrderByWithRelationInput | Job_searchOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Job_searchWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_searches from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_searches.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Job_searches
    **/
    _count?: true | Job_searchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_searchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_searchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_searchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_searchMaxAggregateInputType
  }

  export type GetJob_searchAggregateType<T extends Job_searchAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_search]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_search[P]>
      : GetScalarType<T[P], AggregateJob_search[P]>
  }




  export type Job_searchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_searchWhereInput | $Types.Skip
    orderBy?: Job_searchOrderByWithAggregationInput | Job_searchOrderByWithAggregationInput[] | $Types.Skip
    by: Job_searchScalarFieldEnum[] | Job_searchScalarFieldEnum
    having?: Job_searchScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: Job_searchCountAggregateInputType | true
    _avg?: Job_searchAvgAggregateInputType
    _sum?: Job_searchSumAggregateInputType
    _min?: Job_searchMinAggregateInputType
    _max?: Job_searchMaxAggregateInputType
  }

  export type Job_searchGroupByOutputType = {
    id: number
    title: string
    search_field: string
    city: string | null
    departement: string | null
    contract_type: string | null
    experience: string | null
    professional_field: string | null
    work_time: string | null
    salary: string | null
    handy_friendly: boolean | null
    member_id: number
    created_at: Date
    updated_at: Date
    _count: Job_searchCountAggregateOutputType | null
    _avg: Job_searchAvgAggregateOutputType | null
    _sum: Job_searchSumAggregateOutputType | null
    _min: Job_searchMinAggregateOutputType | null
    _max: Job_searchMaxAggregateOutputType | null
  }

  type GetJob_searchGroupByPayload<T extends Job_searchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_searchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_searchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_searchGroupByOutputType[P]>
            : GetScalarType<T[P], Job_searchGroupByOutputType[P]>
        }
      >
    >


  export type Job_searchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    search_field?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    departement?: boolean | $Types.Skip
    contract_type?: boolean | $Types.Skip
    experience?: boolean | $Types.Skip
    professional_field?: boolean | $Types.Skip
    work_time?: boolean | $Types.Skip
    salary?: boolean | $Types.Skip
    handy_friendly?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }, ExtArgs["result"]["job_search"]>



  export type Job_searchSelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    search_field?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    departement?: boolean | $Types.Skip
    contract_type?: boolean | $Types.Skip
    experience?: boolean | $Types.Skip
    professional_field?: boolean | $Types.Skip
    work_time?: boolean | $Types.Skip
    salary?: boolean | $Types.Skip
    handy_friendly?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type Job_searchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "search_field" | "city" | "departement" | "contract_type" | "experience" | "professional_field" | "work_time" | "salary" | "handy_friendly" | "member_id" | "created_at" | "updated_at", ExtArgs["result"]["job_search"], $Types.Skip>

  export type $Job_searchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job_search"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      search_field: string
      city: string | null
      departement: string | null
      contract_type: string | null
      experience: string | null
      professional_field: string | null
      work_time: string | null
      salary: string | null
      handy_friendly: boolean | null
      member_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["job_search"]>
    composites: {}
  }

  type Job_searchGetPayload<S extends boolean | null | undefined | Job_searchDefaultArgs> = $Result.GetResult<Prisma.$Job_searchPayload, S>

  type Job_searchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Job_searchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_searchCountAggregateInputType | true
    }

  export interface Job_searchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job_search'], meta: { name: 'Job_search' } }
    /**
     * Find zero or one Job_search that matches the filter.
     * @param {Job_searchFindUniqueArgs} args - Arguments to find a Job_search
     * @example
     * // Get one Job_search
     * const job_search = await prisma.job_search.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Job_searchFindUniqueArgs>(args: SelectSubset<T, Job_searchFindUniqueArgs<ExtArgs>>): Prisma__Job_searchClient<$Result.GetResult<Prisma.$Job_searchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_search that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Job_searchFindUniqueOrThrowArgs} args - Arguments to find a Job_search
     * @example
     * // Get one Job_search
     * const job_search = await prisma.job_search.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Job_searchFindUniqueOrThrowArgs>(args: SelectSubset<T, Job_searchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Job_searchClient<$Result.GetResult<Prisma.$Job_searchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_search that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_searchFindFirstArgs} args - Arguments to find a Job_search
     * @example
     * // Get one Job_search
     * const job_search = await prisma.job_search.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Job_searchFindFirstArgs>(args?: SelectSubset<T, Job_searchFindFirstArgs<ExtArgs>>): Prisma__Job_searchClient<$Result.GetResult<Prisma.$Job_searchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_search that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_searchFindFirstOrThrowArgs} args - Arguments to find a Job_search
     * @example
     * // Get one Job_search
     * const job_search = await prisma.job_search.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Job_searchFindFirstOrThrowArgs>(args?: SelectSubset<T, Job_searchFindFirstOrThrowArgs<ExtArgs>>): Prisma__Job_searchClient<$Result.GetResult<Prisma.$Job_searchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_searches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_searchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_searches
     * const job_searches = await prisma.job_search.findMany()
     * 
     * // Get first 10 Job_searches
     * const job_searches = await prisma.job_search.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_searchWithIdOnly = await prisma.job_search.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Job_searchFindManyArgs>(args?: SelectSubset<T, Job_searchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_searchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_search.
     * @param {Job_searchCreateArgs} args - Arguments to create a Job_search.
     * @example
     * // Create one Job_search
     * const Job_search = await prisma.job_search.create({
     *   data: {
     *     // ... data to create a Job_search
     *   }
     * })
     * 
     */
    create<T extends Job_searchCreateArgs>(args: SelectSubset<T, Job_searchCreateArgs<ExtArgs>>): Prisma__Job_searchClient<$Result.GetResult<Prisma.$Job_searchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_searches.
     * @param {Job_searchCreateManyArgs} args - Arguments to create many Job_searches.
     * @example
     * // Create many Job_searches
     * const job_search = await prisma.job_search.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Job_searchCreateManyArgs>(args?: SelectSubset<T, Job_searchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_search.
     * @param {Job_searchDeleteArgs} args - Arguments to delete one Job_search.
     * @example
     * // Delete one Job_search
     * const Job_search = await prisma.job_search.delete({
     *   where: {
     *     // ... filter to delete one Job_search
     *   }
     * })
     * 
     */
    delete<T extends Job_searchDeleteArgs>(args: SelectSubset<T, Job_searchDeleteArgs<ExtArgs>>): Prisma__Job_searchClient<$Result.GetResult<Prisma.$Job_searchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_search.
     * @param {Job_searchUpdateArgs} args - Arguments to update one Job_search.
     * @example
     * // Update one Job_search
     * const job_search = await prisma.job_search.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Job_searchUpdateArgs>(args: SelectSubset<T, Job_searchUpdateArgs<ExtArgs>>): Prisma__Job_searchClient<$Result.GetResult<Prisma.$Job_searchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_searches.
     * @param {Job_searchDeleteManyArgs} args - Arguments to filter Job_searches to delete.
     * @example
     * // Delete a few Job_searches
     * const { count } = await prisma.job_search.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Job_searchDeleteManyArgs>(args?: SelectSubset<T, Job_searchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_searches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_searchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_searches
     * const job_search = await prisma.job_search.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Job_searchUpdateManyArgs>(args: SelectSubset<T, Job_searchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_search.
     * @param {Job_searchUpsertArgs} args - Arguments to update or create a Job_search.
     * @example
     * // Update or create a Job_search
     * const job_search = await prisma.job_search.upsert({
     *   create: {
     *     // ... data to create a Job_search
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_search we want to update
     *   }
     * })
     */
    upsert<T extends Job_searchUpsertArgs>(args: SelectSubset<T, Job_searchUpsertArgs<ExtArgs>>): Prisma__Job_searchClient<$Result.GetResult<Prisma.$Job_searchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_searches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_searchCountArgs} args - Arguments to filter Job_searches to count.
     * @example
     * // Count the number of Job_searches
     * const count = await prisma.job_search.count({
     *   where: {
     *     // ... the filter for the Job_searches we want to count
     *   }
     * })
    **/
    count<T extends Job_searchCountArgs>(
      args?: Subset<T, Job_searchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_searchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_search.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_searchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_searchAggregateArgs>(args: Subset<T, Job_searchAggregateArgs>): Prisma.PrismaPromise<GetJob_searchAggregateType<T>>

    /**
     * Group by Job_search.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_searchGroupByArgs} args - Group by arguments.
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
      T extends Job_searchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Job_searchGroupByArgs['orderBy'] }
        : { orderBy?: Job_searchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Job_searchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_searchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job_search model
   */
  readonly fields: Job_searchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job_search.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Job_searchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Job_search model
   */
  interface Job_searchFieldRefs {
    readonly id: FieldRef<"Job_search", 'Int'>
    readonly title: FieldRef<"Job_search", 'String'>
    readonly search_field: FieldRef<"Job_search", 'String'>
    readonly city: FieldRef<"Job_search", 'String'>
    readonly departement: FieldRef<"Job_search", 'String'>
    readonly contract_type: FieldRef<"Job_search", 'String'>
    readonly experience: FieldRef<"Job_search", 'String'>
    readonly professional_field: FieldRef<"Job_search", 'String'>
    readonly work_time: FieldRef<"Job_search", 'String'>
    readonly salary: FieldRef<"Job_search", 'String'>
    readonly handy_friendly: FieldRef<"Job_search", 'Boolean'>
    readonly member_id: FieldRef<"Job_search", 'Int'>
    readonly created_at: FieldRef<"Job_search", 'DateTime'>
    readonly updated_at: FieldRef<"Job_search", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job_search findUnique
   */
  export type Job_searchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
    /**
     * Filter, which Job_search to fetch.
     */
    where: Job_searchWhereUniqueInput
  }

  /**
   * Job_search findUniqueOrThrow
   */
  export type Job_searchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
    /**
     * Filter, which Job_search to fetch.
     */
    where: Job_searchWhereUniqueInput
  }

  /**
   * Job_search findFirst
   */
  export type Job_searchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
    /**
     * Filter, which Job_search to fetch.
     */
    where?: Job_searchWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_searches to fetch.
     */
    orderBy?: Job_searchOrderByWithRelationInput | Job_searchOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_searches.
     */
    cursor?: Job_searchWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_searches from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_searches.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_searches.
     */
    distinct?: Job_searchScalarFieldEnum | Job_searchScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Job_search findFirstOrThrow
   */
  export type Job_searchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
    /**
     * Filter, which Job_search to fetch.
     */
    where?: Job_searchWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_searches to fetch.
     */
    orderBy?: Job_searchOrderByWithRelationInput | Job_searchOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_searches.
     */
    cursor?: Job_searchWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_searches from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_searches.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_searches.
     */
    distinct?: Job_searchScalarFieldEnum | Job_searchScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Job_search findMany
   */
  export type Job_searchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
    /**
     * Filter, which Job_searches to fetch.
     */
    where?: Job_searchWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_searches to fetch.
     */
    orderBy?: Job_searchOrderByWithRelationInput | Job_searchOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Job_searches.
     */
    cursor?: Job_searchWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_searches from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_searches.
     */
    skip?: number | $Types.Skip
    distinct?: Job_searchScalarFieldEnum | Job_searchScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Job_search create
   */
  export type Job_searchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
    /**
     * The data needed to create a Job_search.
     */
    data: XOR<Job_searchCreateInput, Job_searchUncheckedCreateInput>
  }

  /**
   * Job_search createMany
   */
  export type Job_searchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Job_searches.
     */
    data: Job_searchCreateManyInput | Job_searchCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Job_search update
   */
  export type Job_searchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
    /**
     * The data needed to update a Job_search.
     */
    data: XOR<Job_searchUpdateInput, Job_searchUncheckedUpdateInput>
    /**
     * Choose, which Job_search to update.
     */
    where: Job_searchWhereUniqueInput
  }

  /**
   * Job_search updateMany
   */
  export type Job_searchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Job_searches.
     */
    data: XOR<Job_searchUpdateManyMutationInput, Job_searchUncheckedUpdateManyInput>
    /**
     * Filter which Job_searches to update
     */
    where?: Job_searchWhereInput | $Types.Skip
    /**
     * Limit how many Job_searches to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Job_search upsert
   */
  export type Job_searchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
    /**
     * The filter to search for the Job_search to update in case it exists.
     */
    where: Job_searchWhereUniqueInput
    /**
     * In case the Job_search found by the `where` argument doesn't exist, create a new Job_search with this data.
     */
    create: XOR<Job_searchCreateInput, Job_searchUncheckedCreateInput>
    /**
     * In case the Job_search was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Job_searchUpdateInput, Job_searchUncheckedUpdateInput>
  }

  /**
   * Job_search delete
   */
  export type Job_searchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
    /**
     * Filter which Job_search to delete.
     */
    where: Job_searchWhereUniqueInput
  }

  /**
   * Job_search deleteMany
   */
  export type Job_searchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_searches to delete
     */
    where?: Job_searchWhereInput | $Types.Skip
    /**
     * Limit how many Job_searches to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Job_search without action
   */
  export type Job_searchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_search
     */
    select?: Job_searchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_search
     */
    omit?: Job_searchOmit<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
    job_offer_id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    member_id: number | null
    job_offer_id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    description: string | null
    location: string | null
    member_id: number | null
    job_offer_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    description: string | null
    location: string | null
    member_id: number | null
    job_offer_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    start_date: number
    end_date: number
    description: number
    location: number
    member_id: number
    job_offer_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
  }

  export type EventSumAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
  }

  export type EventMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    description?: true | $Types.Skip
    location?: true | $Types.Skip
    member_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type EventMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    description?: true | $Types.Skip
    location?: true | $Types.Skip
    member_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type EventCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    description?: true | $Types.Skip
    location?: true | $Types.Skip
    member_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput | $Types.Skip
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[] | $Types.Skip
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    start_date: Date
    end_date: Date | null
    description: string | null
    location: string | null
    member_id: number
    job_offer_id: number | null
    created_at: Date
    updated_at: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    start_date?: boolean | $Types.Skip
    end_date?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    job_offer_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    start_date?: boolean | $Types.Skip
    end_date?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    job_offer_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "start_date" | "end_date" | "description" | "location" | "member_id" | "job_offer_id" | "created_at" | "updated_at", ExtArgs["result"]["event"], $Types.Skip>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      start_date: Date
      end_date: Date | null
      description: string | null
      location: string | null
      member_id: number
      job_offer_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly start_date: FieldRef<"Event", 'DateTime'>
    readonly end_date: FieldRef<"Event", 'DateTime'>
    readonly description: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly member_id: FieldRef<"Event", 'Int'>
    readonly job_offer_id: FieldRef<"Event", 'Int'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
    readonly updated_at: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number | $Types.Skip
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput | $Types.Skip
    /**
     * Limit how many Events to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput | $Types.Skip
    /**
     * Limit how many Events to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    company_name: string | null
    location: string | null
    description: string | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    company_name: string | null
    location: string | null
    description: string | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    title: number
    start_date: number
    end_date: number
    company_name: number
    location: number
    description: number
    member_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type ExperienceSumAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type ExperienceMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    company_name?: true | $Types.Skip
    location?: true | $Types.Skip
    description?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    company_name?: true | $Types.Skip
    location?: true | $Types.Skip
    description?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type ExperienceCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    company_name?: true | $Types.Skip
    location?: true | $Types.Skip
    description?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput | $Types.Skip
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[] | $Types.Skip
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    title: string
    start_date: Date
    end_date: Date | null
    company_name: string
    location: string
    description: string | null
    member_id: number
    created_at: Date
    updated_at: Date
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    start_date?: boolean | $Types.Skip
    end_date?: boolean | $Types.Skip
    company_name?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }, ExtArgs["result"]["experience"]>



  export type ExperienceSelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    start_date?: boolean | $Types.Skip
    end_date?: boolean | $Types.Skip
    company_name?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "start_date" | "end_date" | "company_name" | "location" | "description" | "member_id" | "created_at" | "updated_at", ExtArgs["result"]["experience"], $Types.Skip>

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      start_date: Date
      end_date: Date | null
      company_name: string
      location: string
      description: string | null
      member_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'Int'>
    readonly title: FieldRef<"Experience", 'String'>
    readonly start_date: FieldRef<"Experience", 'DateTime'>
    readonly end_date: FieldRef<"Experience", 'DateTime'>
    readonly company_name: FieldRef<"Experience", 'String'>
    readonly location: FieldRef<"Experience", 'String'>
    readonly description: FieldRef<"Experience", 'String'>
    readonly member_id: FieldRef<"Experience", 'Int'>
    readonly created_at: FieldRef<"Experience", 'DateTime'>
    readonly updated_at: FieldRef<"Experience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number | $Types.Skip
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput | $Types.Skip
    /**
     * Limit how many Experiences to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput | $Types.Skip
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type EducationSumAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type EducationMinAggregateOutputType = {
    id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    is_obtained: boolean | null
    school_name: string | null
    location: string | null
    description: string | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EducationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    is_obtained: boolean | null
    school_name: string | null
    location: string | null
    description: string | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    title: number
    start_date: number
    end_date: number
    is_obtained: number
    school_name: number
    location: number
    description: number
    member_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type EducationSumAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type EducationMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    is_obtained?: true | $Types.Skip
    school_name?: true | $Types.Skip
    location?: true | $Types.Skip
    description?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type EducationMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    is_obtained?: true | $Types.Skip
    school_name?: true | $Types.Skip
    location?: true | $Types.Skip
    description?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type EducationCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    is_obtained?: true | $Types.Skip
    school_name?: true | $Types.Skip
    location?: true | $Types.Skip
    description?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput | $Types.Skip
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[] | $Types.Skip
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: number
    title: string
    start_date: Date
    end_date: Date | null
    is_obtained: boolean
    school_name: string
    location: string
    description: string | null
    member_id: number
    created_at: Date
    updated_at: Date
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    start_date?: boolean | $Types.Skip
    end_date?: boolean | $Types.Skip
    is_obtained?: boolean | $Types.Skip
    school_name?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }, ExtArgs["result"]["education"]>



  export type EducationSelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    start_date?: boolean | $Types.Skip
    end_date?: boolean | $Types.Skip
    is_obtained?: boolean | $Types.Skip
    school_name?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "start_date" | "end_date" | "is_obtained" | "school_name" | "location" | "description" | "member_id" | "created_at" | "updated_at", ExtArgs["result"]["education"], $Types.Skip>

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      start_date: Date
      end_date: Date | null
      is_obtained: boolean
      school_name: string
      location: string
      description: string | null
      member_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
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
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'Int'>
    readonly title: FieldRef<"Education", 'String'>
    readonly start_date: FieldRef<"Education", 'DateTime'>
    readonly end_date: FieldRef<"Education", 'DateTime'>
    readonly is_obtained: FieldRef<"Education", 'Boolean'>
    readonly school_name: FieldRef<"Education", 'String'>
    readonly location: FieldRef<"Education", 'String'>
    readonly description: FieldRef<"Education", 'String'>
    readonly member_id: FieldRef<"Education", 'Int'>
    readonly created_at: FieldRef<"Education", 'DateTime'>
    readonly updated_at: FieldRef<"Education", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number | $Types.Skip
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput | $Types.Skip
    /**
     * Limit how many Educations to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput | $Types.Skip
    /**
     * Limit how many Educations to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    title: string | null
    category: $Enums.Skills | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    title: string | null
    category: $Enums.Skills | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    title: number
    category: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type SkillSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type SkillMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    category?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type SkillMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    category?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type SkillCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    category?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput | $Types.Skip
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[] | $Types.Skip
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    title: string
    category: $Enums.Skills
    created_at: Date
    updated_at: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    Member_skill?: boolean | Skill$Member_skillArgs<ExtArgs> | $Types.Skip
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["skill"]>



  export type SkillSelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "created_at" | "updated_at", ExtArgs["result"]["skill"], $Types.Skip>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member_skill?: boolean | Skill$Member_skillArgs<ExtArgs> | $Types.Skip
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      Member_skill: Prisma.$Member_skillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      category: $Enums.Skills
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Member_skill<T extends Skill$Member_skillArgs<ExtArgs> = {}>(args?: Subset<T, Skill$Member_skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly title: FieldRef<"Skill", 'String'>
    readonly category: FieldRef<"Skill", 'Skills'>
    readonly created_at: FieldRef<"Skill", 'DateTime'>
    readonly updated_at: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number | $Types.Skip
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput | $Types.Skip
    /**
     * Limit how many Skills to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput | $Types.Skip
    /**
     * Limit how many Skills to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Skill.Member_skill
   */
  export type Skill$Member_skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    where?: Member_skillWhereInput | $Types.Skip
    orderBy?: Member_skillOrderByWithRelationInput | Member_skillOrderByWithRelationInput[] | $Types.Skip
    cursor?: Member_skillWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: Member_skillScalarFieldEnum | Member_skillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Mad_skill
   */

  export type AggregateMad_skill = {
    _count: Mad_skillCountAggregateOutputType | null
    _avg: Mad_skillAvgAggregateOutputType | null
    _sum: Mad_skillSumAggregateOutputType | null
    _min: Mad_skillMinAggregateOutputType | null
    _max: Mad_skillMaxAggregateOutputType | null
  }

  export type Mad_skillAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type Mad_skillSumAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type Mad_skillMinAggregateOutputType = {
    id: number | null
    title: string | null
    category: $Enums.MadSkills | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Mad_skillMaxAggregateOutputType = {
    id: number | null
    title: string | null
    category: $Enums.MadSkills | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Mad_skillCountAggregateOutputType = {
    id: number
    title: number
    category: number
    member_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Mad_skillAvgAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type Mad_skillSumAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type Mad_skillMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    category?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type Mad_skillMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    category?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type Mad_skillCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    category?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type Mad_skillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mad_skill to aggregate.
     */
    where?: Mad_skillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mad_skills to fetch.
     */
    orderBy?: Mad_skillOrderByWithRelationInput | Mad_skillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Mad_skillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mad_skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mad_skills.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mad_skills
    **/
    _count?: true | Mad_skillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mad_skillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mad_skillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mad_skillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mad_skillMaxAggregateInputType
  }

  export type GetMad_skillAggregateType<T extends Mad_skillAggregateArgs> = {
        [P in keyof T & keyof AggregateMad_skill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMad_skill[P]>
      : GetScalarType<T[P], AggregateMad_skill[P]>
  }




  export type Mad_skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Mad_skillWhereInput | $Types.Skip
    orderBy?: Mad_skillOrderByWithAggregationInput | Mad_skillOrderByWithAggregationInput[] | $Types.Skip
    by: Mad_skillScalarFieldEnum[] | Mad_skillScalarFieldEnum
    having?: Mad_skillScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: Mad_skillCountAggregateInputType | true
    _avg?: Mad_skillAvgAggregateInputType
    _sum?: Mad_skillSumAggregateInputType
    _min?: Mad_skillMinAggregateInputType
    _max?: Mad_skillMaxAggregateInputType
  }

  export type Mad_skillGroupByOutputType = {
    id: number
    title: string
    category: $Enums.MadSkills
    member_id: number
    created_at: Date
    updated_at: Date
    _count: Mad_skillCountAggregateOutputType | null
    _avg: Mad_skillAvgAggregateOutputType | null
    _sum: Mad_skillSumAggregateOutputType | null
    _min: Mad_skillMinAggregateOutputType | null
    _max: Mad_skillMaxAggregateOutputType | null
  }

  type GetMad_skillGroupByPayload<T extends Mad_skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mad_skillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mad_skillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mad_skillGroupByOutputType[P]>
            : GetScalarType<T[P], Mad_skillGroupByOutputType[P]>
        }
      >
    >


  export type Mad_skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }, ExtArgs["result"]["mad_skill"]>



  export type Mad_skillSelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type Mad_skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "member_id" | "created_at" | "updated_at", ExtArgs["result"]["mad_skill"], $Types.Skip>

  export type $Mad_skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mad_skill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      category: $Enums.MadSkills
      member_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["mad_skill"]>
    composites: {}
  }

  type Mad_skillGetPayload<S extends boolean | null | undefined | Mad_skillDefaultArgs> = $Result.GetResult<Prisma.$Mad_skillPayload, S>

  type Mad_skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Mad_skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mad_skillCountAggregateInputType | true
    }

  export interface Mad_skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mad_skill'], meta: { name: 'Mad_skill' } }
    /**
     * Find zero or one Mad_skill that matches the filter.
     * @param {Mad_skillFindUniqueArgs} args - Arguments to find a Mad_skill
     * @example
     * // Get one Mad_skill
     * const mad_skill = await prisma.mad_skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Mad_skillFindUniqueArgs>(args: SelectSubset<T, Mad_skillFindUniqueArgs<ExtArgs>>): Prisma__Mad_skillClient<$Result.GetResult<Prisma.$Mad_skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mad_skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Mad_skillFindUniqueOrThrowArgs} args - Arguments to find a Mad_skill
     * @example
     * // Get one Mad_skill
     * const mad_skill = await prisma.mad_skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Mad_skillFindUniqueOrThrowArgs>(args: SelectSubset<T, Mad_skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Mad_skillClient<$Result.GetResult<Prisma.$Mad_skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mad_skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mad_skillFindFirstArgs} args - Arguments to find a Mad_skill
     * @example
     * // Get one Mad_skill
     * const mad_skill = await prisma.mad_skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Mad_skillFindFirstArgs>(args?: SelectSubset<T, Mad_skillFindFirstArgs<ExtArgs>>): Prisma__Mad_skillClient<$Result.GetResult<Prisma.$Mad_skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mad_skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mad_skillFindFirstOrThrowArgs} args - Arguments to find a Mad_skill
     * @example
     * // Get one Mad_skill
     * const mad_skill = await prisma.mad_skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Mad_skillFindFirstOrThrowArgs>(args?: SelectSubset<T, Mad_skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__Mad_skillClient<$Result.GetResult<Prisma.$Mad_skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mad_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mad_skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mad_skills
     * const mad_skills = await prisma.mad_skill.findMany()
     * 
     * // Get first 10 Mad_skills
     * const mad_skills = await prisma.mad_skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mad_skillWithIdOnly = await prisma.mad_skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Mad_skillFindManyArgs>(args?: SelectSubset<T, Mad_skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Mad_skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mad_skill.
     * @param {Mad_skillCreateArgs} args - Arguments to create a Mad_skill.
     * @example
     * // Create one Mad_skill
     * const Mad_skill = await prisma.mad_skill.create({
     *   data: {
     *     // ... data to create a Mad_skill
     *   }
     * })
     * 
     */
    create<T extends Mad_skillCreateArgs>(args: SelectSubset<T, Mad_skillCreateArgs<ExtArgs>>): Prisma__Mad_skillClient<$Result.GetResult<Prisma.$Mad_skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mad_skills.
     * @param {Mad_skillCreateManyArgs} args - Arguments to create many Mad_skills.
     * @example
     * // Create many Mad_skills
     * const mad_skill = await prisma.mad_skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Mad_skillCreateManyArgs>(args?: SelectSubset<T, Mad_skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mad_skill.
     * @param {Mad_skillDeleteArgs} args - Arguments to delete one Mad_skill.
     * @example
     * // Delete one Mad_skill
     * const Mad_skill = await prisma.mad_skill.delete({
     *   where: {
     *     // ... filter to delete one Mad_skill
     *   }
     * })
     * 
     */
    delete<T extends Mad_skillDeleteArgs>(args: SelectSubset<T, Mad_skillDeleteArgs<ExtArgs>>): Prisma__Mad_skillClient<$Result.GetResult<Prisma.$Mad_skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mad_skill.
     * @param {Mad_skillUpdateArgs} args - Arguments to update one Mad_skill.
     * @example
     * // Update one Mad_skill
     * const mad_skill = await prisma.mad_skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Mad_skillUpdateArgs>(args: SelectSubset<T, Mad_skillUpdateArgs<ExtArgs>>): Prisma__Mad_skillClient<$Result.GetResult<Prisma.$Mad_skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mad_skills.
     * @param {Mad_skillDeleteManyArgs} args - Arguments to filter Mad_skills to delete.
     * @example
     * // Delete a few Mad_skills
     * const { count } = await prisma.mad_skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Mad_skillDeleteManyArgs>(args?: SelectSubset<T, Mad_skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mad_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mad_skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mad_skills
     * const mad_skill = await prisma.mad_skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Mad_skillUpdateManyArgs>(args: SelectSubset<T, Mad_skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mad_skill.
     * @param {Mad_skillUpsertArgs} args - Arguments to update or create a Mad_skill.
     * @example
     * // Update or create a Mad_skill
     * const mad_skill = await prisma.mad_skill.upsert({
     *   create: {
     *     // ... data to create a Mad_skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mad_skill we want to update
     *   }
     * })
     */
    upsert<T extends Mad_skillUpsertArgs>(args: SelectSubset<T, Mad_skillUpsertArgs<ExtArgs>>): Prisma__Mad_skillClient<$Result.GetResult<Prisma.$Mad_skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mad_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mad_skillCountArgs} args - Arguments to filter Mad_skills to count.
     * @example
     * // Count the number of Mad_skills
     * const count = await prisma.mad_skill.count({
     *   where: {
     *     // ... the filter for the Mad_skills we want to count
     *   }
     * })
    **/
    count<T extends Mad_skillCountArgs>(
      args?: Subset<T, Mad_skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mad_skillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mad_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mad_skillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mad_skillAggregateArgs>(args: Subset<T, Mad_skillAggregateArgs>): Prisma.PrismaPromise<GetMad_skillAggregateType<T>>

    /**
     * Group by Mad_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mad_skillGroupByArgs} args - Group by arguments.
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
      T extends Mad_skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mad_skillGroupByArgs['orderBy'] }
        : { orderBy?: Mad_skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Mad_skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMad_skillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mad_skill model
   */
  readonly fields: Mad_skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mad_skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Mad_skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Mad_skill model
   */
  interface Mad_skillFieldRefs {
    readonly id: FieldRef<"Mad_skill", 'Int'>
    readonly title: FieldRef<"Mad_skill", 'String'>
    readonly category: FieldRef<"Mad_skill", 'MadSkills'>
    readonly member_id: FieldRef<"Mad_skill", 'Int'>
    readonly created_at: FieldRef<"Mad_skill", 'DateTime'>
    readonly updated_at: FieldRef<"Mad_skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mad_skill findUnique
   */
  export type Mad_skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
    /**
     * Filter, which Mad_skill to fetch.
     */
    where: Mad_skillWhereUniqueInput
  }

  /**
   * Mad_skill findUniqueOrThrow
   */
  export type Mad_skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
    /**
     * Filter, which Mad_skill to fetch.
     */
    where: Mad_skillWhereUniqueInput
  }

  /**
   * Mad_skill findFirst
   */
  export type Mad_skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
    /**
     * Filter, which Mad_skill to fetch.
     */
    where?: Mad_skillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mad_skills to fetch.
     */
    orderBy?: Mad_skillOrderByWithRelationInput | Mad_skillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mad_skills.
     */
    cursor?: Mad_skillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mad_skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mad_skills.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mad_skills.
     */
    distinct?: Mad_skillScalarFieldEnum | Mad_skillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Mad_skill findFirstOrThrow
   */
  export type Mad_skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
    /**
     * Filter, which Mad_skill to fetch.
     */
    where?: Mad_skillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mad_skills to fetch.
     */
    orderBy?: Mad_skillOrderByWithRelationInput | Mad_skillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mad_skills.
     */
    cursor?: Mad_skillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mad_skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mad_skills.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mad_skills.
     */
    distinct?: Mad_skillScalarFieldEnum | Mad_skillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Mad_skill findMany
   */
  export type Mad_skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
    /**
     * Filter, which Mad_skills to fetch.
     */
    where?: Mad_skillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mad_skills to fetch.
     */
    orderBy?: Mad_skillOrderByWithRelationInput | Mad_skillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mad_skills.
     */
    cursor?: Mad_skillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mad_skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mad_skills.
     */
    skip?: number | $Types.Skip
    distinct?: Mad_skillScalarFieldEnum | Mad_skillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Mad_skill create
   */
  export type Mad_skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
    /**
     * The data needed to create a Mad_skill.
     */
    data: XOR<Mad_skillCreateInput, Mad_skillUncheckedCreateInput>
  }

  /**
   * Mad_skill createMany
   */
  export type Mad_skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mad_skills.
     */
    data: Mad_skillCreateManyInput | Mad_skillCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Mad_skill update
   */
  export type Mad_skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
    /**
     * The data needed to update a Mad_skill.
     */
    data: XOR<Mad_skillUpdateInput, Mad_skillUncheckedUpdateInput>
    /**
     * Choose, which Mad_skill to update.
     */
    where: Mad_skillWhereUniqueInput
  }

  /**
   * Mad_skill updateMany
   */
  export type Mad_skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mad_skills.
     */
    data: XOR<Mad_skillUpdateManyMutationInput, Mad_skillUncheckedUpdateManyInput>
    /**
     * Filter which Mad_skills to update
     */
    where?: Mad_skillWhereInput | $Types.Skip
    /**
     * Limit how many Mad_skills to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Mad_skill upsert
   */
  export type Mad_skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
    /**
     * The filter to search for the Mad_skill to update in case it exists.
     */
    where: Mad_skillWhereUniqueInput
    /**
     * In case the Mad_skill found by the `where` argument doesn't exist, create a new Mad_skill with this data.
     */
    create: XOR<Mad_skillCreateInput, Mad_skillUncheckedCreateInput>
    /**
     * In case the Mad_skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Mad_skillUpdateInput, Mad_skillUncheckedUpdateInput>
  }

  /**
   * Mad_skill delete
   */
  export type Mad_skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
    /**
     * Filter which Mad_skill to delete.
     */
    where: Mad_skillWhereUniqueInput
  }

  /**
   * Mad_skill deleteMany
   */
  export type Mad_skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mad_skills to delete
     */
    where?: Mad_skillWhereInput | $Types.Skip
    /**
     * Limit how many Mad_skills to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Mad_skill without action
   */
  export type Mad_skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mad_skill
     */
    select?: Mad_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mad_skill
     */
    omit?: Mad_skillOmit<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
    member_id: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    start_date: Date | null
    end_date: Date | null
    location: string | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    start_date: Date | null
    end_date: Date | null
    location: string | null
    member_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    title: number
    description: number
    start_date: number
    end_date: number
    location: number
    member_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type ActivitySumAggregateInputType = {
    id?: true | $Types.Skip
    member_id?: true | $Types.Skip
  }

  export type ActivityMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    description?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    location?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type ActivityMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    description?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    location?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type ActivityCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    description?: true | $Types.Skip
    start_date?: true | $Types.Skip
    end_date?: true | $Types.Skip
    location?: true | $Types.Skip
    member_id?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput | $Types.Skip
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[] | $Types.Skip
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    title: string
    description: string | null
    start_date: Date
    end_date: Date | null
    location: string
    member_id: number
    created_at: Date
    updated_at: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    start_date?: boolean | $Types.Skip
    end_date?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }, ExtArgs["result"]["activity"]>



  export type ActivitySelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    start_date?: boolean | $Types.Skip
    end_date?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    member_id?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "start_date" | "end_date" | "location" | "member_id" | "created_at" | "updated_at", ExtArgs["result"]["activity"], $Types.Skip>

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      start_date: Date
      end_date: Date | null
      location: string
      member_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly start_date: FieldRef<"Activity", 'DateTime'>
    readonly end_date: FieldRef<"Activity", 'DateTime'>
    readonly location: FieldRef<"Activity", 'String'>
    readonly member_id: FieldRef<"Activity", 'Int'>
    readonly created_at: FieldRef<"Activity", 'DateTime'>
    readonly updated_at: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number | $Types.Skip
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput | $Types.Skip
    /**
     * Limit how many Activities to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput | $Types.Skip
    /**
     * Limit how many Activities to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
  }


  /**
   * Model Langue
   */

  export type AggregateLangue = {
    _count: LangueCountAggregateOutputType | null
    _avg: LangueAvgAggregateOutputType | null
    _sum: LangueSumAggregateOutputType | null
    _min: LangueMinAggregateOutputType | null
    _max: LangueMaxAggregateOutputType | null
  }

  export type LangueAvgAggregateOutputType = {
    id: number | null
  }

  export type LangueSumAggregateOutputType = {
    id: number | null
  }

  export type LangueMinAggregateOutputType = {
    id: number | null
    title: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LangueMaxAggregateOutputType = {
    id: number | null
    title: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LangueCountAggregateOutputType = {
    id: number
    title: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LangueAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type LangueSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type LangueMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type LangueMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
  }

  export type LangueCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    created_at?: true | $Types.Skip
    updated_at?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type LangueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Langue to aggregate.
     */
    where?: LangueWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Langues to fetch.
     */
    orderBy?: LangueOrderByWithRelationInput | LangueOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LangueWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Langues from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Langues.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Langues
    **/
    _count?: true | LangueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LangueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LangueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LangueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LangueMaxAggregateInputType
  }

  export type GetLangueAggregateType<T extends LangueAggregateArgs> = {
        [P in keyof T & keyof AggregateLangue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLangue[P]>
      : GetScalarType<T[P], AggregateLangue[P]>
  }




  export type LangueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LangueWhereInput | $Types.Skip
    orderBy?: LangueOrderByWithAggregationInput | LangueOrderByWithAggregationInput[] | $Types.Skip
    by: LangueScalarFieldEnum[] | LangueScalarFieldEnum
    having?: LangueScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: LangueCountAggregateInputType | true
    _avg?: LangueAvgAggregateInputType
    _sum?: LangueSumAggregateInputType
    _min?: LangueMinAggregateInputType
    _max?: LangueMaxAggregateInputType
  }

  export type LangueGroupByOutputType = {
    id: number
    title: string
    created_at: Date
    updated_at: Date
    _count: LangueCountAggregateOutputType | null
    _avg: LangueAvgAggregateOutputType | null
    _sum: LangueSumAggregateOutputType | null
    _min: LangueMinAggregateOutputType | null
    _max: LangueMaxAggregateOutputType | null
  }

  type GetLangueGroupByPayload<T extends LangueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LangueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LangueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LangueGroupByOutputType[P]>
            : GetScalarType<T[P], LangueGroupByOutputType[P]>
        }
      >
    >


  export type LangueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
    Member_langue?: boolean | Langue$Member_langueArgs<ExtArgs> | $Types.Skip
    _count?: boolean | LangueCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["langue"]>



  export type LangueSelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    created_at?: boolean | $Types.Skip
    updated_at?: boolean | $Types.Skip
  }

  export type LangueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "created_at" | "updated_at", ExtArgs["result"]["langue"], $Types.Skip>
  export type LangueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member_langue?: boolean | Langue$Member_langueArgs<ExtArgs> | $Types.Skip
    _count?: boolean | LangueCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $LanguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Langue"
    objects: {
      Member_langue: Prisma.$Member_languePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["langue"]>
    composites: {}
  }

  type LangueGetPayload<S extends boolean | null | undefined | LangueDefaultArgs> = $Result.GetResult<Prisma.$LanguePayload, S>

  type LangueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LangueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LangueCountAggregateInputType | true
    }

  export interface LangueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Langue'], meta: { name: 'Langue' } }
    /**
     * Find zero or one Langue that matches the filter.
     * @param {LangueFindUniqueArgs} args - Arguments to find a Langue
     * @example
     * // Get one Langue
     * const langue = await prisma.langue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LangueFindUniqueArgs>(args: SelectSubset<T, LangueFindUniqueArgs<ExtArgs>>): Prisma__LangueClient<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Langue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LangueFindUniqueOrThrowArgs} args - Arguments to find a Langue
     * @example
     * // Get one Langue
     * const langue = await prisma.langue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LangueFindUniqueOrThrowArgs>(args: SelectSubset<T, LangueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LangueClient<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Langue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LangueFindFirstArgs} args - Arguments to find a Langue
     * @example
     * // Get one Langue
     * const langue = await prisma.langue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LangueFindFirstArgs>(args?: SelectSubset<T, LangueFindFirstArgs<ExtArgs>>): Prisma__LangueClient<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Langue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LangueFindFirstOrThrowArgs} args - Arguments to find a Langue
     * @example
     * // Get one Langue
     * const langue = await prisma.langue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LangueFindFirstOrThrowArgs>(args?: SelectSubset<T, LangueFindFirstOrThrowArgs<ExtArgs>>): Prisma__LangueClient<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Langues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LangueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Langues
     * const langues = await prisma.langue.findMany()
     * 
     * // Get first 10 Langues
     * const langues = await prisma.langue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const langueWithIdOnly = await prisma.langue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LangueFindManyArgs>(args?: SelectSubset<T, LangueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Langue.
     * @param {LangueCreateArgs} args - Arguments to create a Langue.
     * @example
     * // Create one Langue
     * const Langue = await prisma.langue.create({
     *   data: {
     *     // ... data to create a Langue
     *   }
     * })
     * 
     */
    create<T extends LangueCreateArgs>(args: SelectSubset<T, LangueCreateArgs<ExtArgs>>): Prisma__LangueClient<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Langues.
     * @param {LangueCreateManyArgs} args - Arguments to create many Langues.
     * @example
     * // Create many Langues
     * const langue = await prisma.langue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LangueCreateManyArgs>(args?: SelectSubset<T, LangueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Langue.
     * @param {LangueDeleteArgs} args - Arguments to delete one Langue.
     * @example
     * // Delete one Langue
     * const Langue = await prisma.langue.delete({
     *   where: {
     *     // ... filter to delete one Langue
     *   }
     * })
     * 
     */
    delete<T extends LangueDeleteArgs>(args: SelectSubset<T, LangueDeleteArgs<ExtArgs>>): Prisma__LangueClient<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Langue.
     * @param {LangueUpdateArgs} args - Arguments to update one Langue.
     * @example
     * // Update one Langue
     * const langue = await prisma.langue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LangueUpdateArgs>(args: SelectSubset<T, LangueUpdateArgs<ExtArgs>>): Prisma__LangueClient<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Langues.
     * @param {LangueDeleteManyArgs} args - Arguments to filter Langues to delete.
     * @example
     * // Delete a few Langues
     * const { count } = await prisma.langue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LangueDeleteManyArgs>(args?: SelectSubset<T, LangueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Langues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LangueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Langues
     * const langue = await prisma.langue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LangueUpdateManyArgs>(args: SelectSubset<T, LangueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Langue.
     * @param {LangueUpsertArgs} args - Arguments to update or create a Langue.
     * @example
     * // Update or create a Langue
     * const langue = await prisma.langue.upsert({
     *   create: {
     *     // ... data to create a Langue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Langue we want to update
     *   }
     * })
     */
    upsert<T extends LangueUpsertArgs>(args: SelectSubset<T, LangueUpsertArgs<ExtArgs>>): Prisma__LangueClient<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Langues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LangueCountArgs} args - Arguments to filter Langues to count.
     * @example
     * // Count the number of Langues
     * const count = await prisma.langue.count({
     *   where: {
     *     // ... the filter for the Langues we want to count
     *   }
     * })
    **/
    count<T extends LangueCountArgs>(
      args?: Subset<T, LangueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LangueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Langue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LangueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LangueAggregateArgs>(args: Subset<T, LangueAggregateArgs>): Prisma.PrismaPromise<GetLangueAggregateType<T>>

    /**
     * Group by Langue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LangueGroupByArgs} args - Group by arguments.
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
      T extends LangueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LangueGroupByArgs['orderBy'] }
        : { orderBy?: LangueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LangueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLangueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Langue model
   */
  readonly fields: LangueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Langue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LangueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Member_langue<T extends Langue$Member_langueArgs<ExtArgs> = {}>(args?: Subset<T, Langue$Member_langueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Langue model
   */
  interface LangueFieldRefs {
    readonly id: FieldRef<"Langue", 'Int'>
    readonly title: FieldRef<"Langue", 'String'>
    readonly created_at: FieldRef<"Langue", 'DateTime'>
    readonly updated_at: FieldRef<"Langue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Langue findUnique
   */
  export type LangueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
    /**
     * Filter, which Langue to fetch.
     */
    where: LangueWhereUniqueInput
  }

  /**
   * Langue findUniqueOrThrow
   */
  export type LangueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
    /**
     * Filter, which Langue to fetch.
     */
    where: LangueWhereUniqueInput
  }

  /**
   * Langue findFirst
   */
  export type LangueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
    /**
     * Filter, which Langue to fetch.
     */
    where?: LangueWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Langues to fetch.
     */
    orderBy?: LangueOrderByWithRelationInput | LangueOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Langues.
     */
    cursor?: LangueWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Langues from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Langues.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Langues.
     */
    distinct?: LangueScalarFieldEnum | LangueScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Langue findFirstOrThrow
   */
  export type LangueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
    /**
     * Filter, which Langue to fetch.
     */
    where?: LangueWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Langues to fetch.
     */
    orderBy?: LangueOrderByWithRelationInput | LangueOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Langues.
     */
    cursor?: LangueWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Langues from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Langues.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Langues.
     */
    distinct?: LangueScalarFieldEnum | LangueScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Langue findMany
   */
  export type LangueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
    /**
     * Filter, which Langues to fetch.
     */
    where?: LangueWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Langues to fetch.
     */
    orderBy?: LangueOrderByWithRelationInput | LangueOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Langues.
     */
    cursor?: LangueWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Langues from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Langues.
     */
    skip?: number | $Types.Skip
    distinct?: LangueScalarFieldEnum | LangueScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Langue create
   */
  export type LangueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
    /**
     * The data needed to create a Langue.
     */
    data: XOR<LangueCreateInput, LangueUncheckedCreateInput>
  }

  /**
   * Langue createMany
   */
  export type LangueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Langues.
     */
    data: LangueCreateManyInput | LangueCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Langue update
   */
  export type LangueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
    /**
     * The data needed to update a Langue.
     */
    data: XOR<LangueUpdateInput, LangueUncheckedUpdateInput>
    /**
     * Choose, which Langue to update.
     */
    where: LangueWhereUniqueInput
  }

  /**
   * Langue updateMany
   */
  export type LangueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Langues.
     */
    data: XOR<LangueUpdateManyMutationInput, LangueUncheckedUpdateManyInput>
    /**
     * Filter which Langues to update
     */
    where?: LangueWhereInput | $Types.Skip
    /**
     * Limit how many Langues to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Langue upsert
   */
  export type LangueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
    /**
     * The filter to search for the Langue to update in case it exists.
     */
    where: LangueWhereUniqueInput
    /**
     * In case the Langue found by the `where` argument doesn't exist, create a new Langue with this data.
     */
    create: XOR<LangueCreateInput, LangueUncheckedCreateInput>
    /**
     * In case the Langue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LangueUpdateInput, LangueUncheckedUpdateInput>
  }

  /**
   * Langue delete
   */
  export type LangueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
    /**
     * Filter which Langue to delete.
     */
    where: LangueWhereUniqueInput
  }

  /**
   * Langue deleteMany
   */
  export type LangueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Langues to delete
     */
    where?: LangueWhereInput | $Types.Skip
    /**
     * Limit how many Langues to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Langue.Member_langue
   */
  export type Langue$Member_langueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    where?: Member_langueWhereInput | $Types.Skip
    orderBy?: Member_langueOrderByWithRelationInput | Member_langueOrderByWithRelationInput[] | $Types.Skip
    cursor?: Member_langueWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: Member_langueScalarFieldEnum | Member_langueScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Langue without action
   */
  export type LangueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Langue
     */
    select?: LangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Langue
     */
    omit?: LangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LangueInclude<ExtArgs> | null
  }


  /**
   * Model Member_skill
   */

  export type AggregateMember_skill = {
    _count: Member_skillCountAggregateOutputType | null
    _avg: Member_skillAvgAggregateOutputType | null
    _sum: Member_skillSumAggregateOutputType | null
    _min: Member_skillMinAggregateOutputType | null
    _max: Member_skillMaxAggregateOutputType | null
  }

  export type Member_skillAvgAggregateOutputType = {
    member_id: number | null
    skill_id: number | null
  }

  export type Member_skillSumAggregateOutputType = {
    member_id: number | null
    skill_id: number | null
  }

  export type Member_skillMinAggregateOutputType = {
    member_id: number | null
    skill_id: number | null
  }

  export type Member_skillMaxAggregateOutputType = {
    member_id: number | null
    skill_id: number | null
  }

  export type Member_skillCountAggregateOutputType = {
    member_id: number
    skill_id: number
    _all: number
  }


  export type Member_skillAvgAggregateInputType = {
    member_id?: true | $Types.Skip
    skill_id?: true | $Types.Skip
  }

  export type Member_skillSumAggregateInputType = {
    member_id?: true | $Types.Skip
    skill_id?: true | $Types.Skip
  }

  export type Member_skillMinAggregateInputType = {
    member_id?: true | $Types.Skip
    skill_id?: true | $Types.Skip
  }

  export type Member_skillMaxAggregateInputType = {
    member_id?: true | $Types.Skip
    skill_id?: true | $Types.Skip
  }

  export type Member_skillCountAggregateInputType = {
    member_id?: true | $Types.Skip
    skill_id?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type Member_skillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member_skill to aggregate.
     */
    where?: Member_skillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_skills to fetch.
     */
    orderBy?: Member_skillOrderByWithRelationInput | Member_skillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Member_skillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_skills.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Member_skills
    **/
    _count?: true | Member_skillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Member_skillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Member_skillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Member_skillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Member_skillMaxAggregateInputType
  }

  export type GetMember_skillAggregateType<T extends Member_skillAggregateArgs> = {
        [P in keyof T & keyof AggregateMember_skill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember_skill[P]>
      : GetScalarType<T[P], AggregateMember_skill[P]>
  }




  export type Member_skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Member_skillWhereInput | $Types.Skip
    orderBy?: Member_skillOrderByWithAggregationInput | Member_skillOrderByWithAggregationInput[] | $Types.Skip
    by: Member_skillScalarFieldEnum[] | Member_skillScalarFieldEnum
    having?: Member_skillScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: Member_skillCountAggregateInputType | true
    _avg?: Member_skillAvgAggregateInputType
    _sum?: Member_skillSumAggregateInputType
    _min?: Member_skillMinAggregateInputType
    _max?: Member_skillMaxAggregateInputType
  }

  export type Member_skillGroupByOutputType = {
    member_id: number
    skill_id: number
    _count: Member_skillCountAggregateOutputType | null
    _avg: Member_skillAvgAggregateOutputType | null
    _sum: Member_skillSumAggregateOutputType | null
    _min: Member_skillMinAggregateOutputType | null
    _max: Member_skillMaxAggregateOutputType | null
  }

  type GetMember_skillGroupByPayload<T extends Member_skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Member_skillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Member_skillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Member_skillGroupByOutputType[P]>
            : GetScalarType<T[P], Member_skillGroupByOutputType[P]>
        }
      >
    >


  export type Member_skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean | $Types.Skip
    skill_id?: boolean | $Types.Skip
    skill?: boolean | SkillDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["member_skill"]>



  export type Member_skillSelectScalar = {
    member_id?: boolean | $Types.Skip
    skill_id?: boolean | $Types.Skip
  }

  export type Member_skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"member_id" | "skill_id", ExtArgs["result"]["member_skill"], $Types.Skip>
  export type Member_skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $Member_skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member_skill"
    objects: {
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      skill_id: number
    }, ExtArgs["result"]["member_skill"]>
    composites: {}
  }

  type Member_skillGetPayload<S extends boolean | null | undefined | Member_skillDefaultArgs> = $Result.GetResult<Prisma.$Member_skillPayload, S>

  type Member_skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Member_skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Member_skillCountAggregateInputType | true
    }

  export interface Member_skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member_skill'], meta: { name: 'Member_skill' } }
    /**
     * Find zero or one Member_skill that matches the filter.
     * @param {Member_skillFindUniqueArgs} args - Arguments to find a Member_skill
     * @example
     * // Get one Member_skill
     * const member_skill = await prisma.member_skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Member_skillFindUniqueArgs>(args: SelectSubset<T, Member_skillFindUniqueArgs<ExtArgs>>): Prisma__Member_skillClient<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member_skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Member_skillFindUniqueOrThrowArgs} args - Arguments to find a Member_skill
     * @example
     * // Get one Member_skill
     * const member_skill = await prisma.member_skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Member_skillFindUniqueOrThrowArgs>(args: SelectSubset<T, Member_skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Member_skillClient<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_skillFindFirstArgs} args - Arguments to find a Member_skill
     * @example
     * // Get one Member_skill
     * const member_skill = await prisma.member_skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Member_skillFindFirstArgs>(args?: SelectSubset<T, Member_skillFindFirstArgs<ExtArgs>>): Prisma__Member_skillClient<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_skillFindFirstOrThrowArgs} args - Arguments to find a Member_skill
     * @example
     * // Get one Member_skill
     * const member_skill = await prisma.member_skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Member_skillFindFirstOrThrowArgs>(args?: SelectSubset<T, Member_skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__Member_skillClient<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Member_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Member_skills
     * const member_skills = await prisma.member_skill.findMany()
     * 
     * // Get first 10 Member_skills
     * const member_skills = await prisma.member_skill.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const member_skillWithMember_idOnly = await prisma.member_skill.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends Member_skillFindManyArgs>(args?: SelectSubset<T, Member_skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member_skill.
     * @param {Member_skillCreateArgs} args - Arguments to create a Member_skill.
     * @example
     * // Create one Member_skill
     * const Member_skill = await prisma.member_skill.create({
     *   data: {
     *     // ... data to create a Member_skill
     *   }
     * })
     * 
     */
    create<T extends Member_skillCreateArgs>(args: SelectSubset<T, Member_skillCreateArgs<ExtArgs>>): Prisma__Member_skillClient<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Member_skills.
     * @param {Member_skillCreateManyArgs} args - Arguments to create many Member_skills.
     * @example
     * // Create many Member_skills
     * const member_skill = await prisma.member_skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Member_skillCreateManyArgs>(args?: SelectSubset<T, Member_skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member_skill.
     * @param {Member_skillDeleteArgs} args - Arguments to delete one Member_skill.
     * @example
     * // Delete one Member_skill
     * const Member_skill = await prisma.member_skill.delete({
     *   where: {
     *     // ... filter to delete one Member_skill
     *   }
     * })
     * 
     */
    delete<T extends Member_skillDeleteArgs>(args: SelectSubset<T, Member_skillDeleteArgs<ExtArgs>>): Prisma__Member_skillClient<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member_skill.
     * @param {Member_skillUpdateArgs} args - Arguments to update one Member_skill.
     * @example
     * // Update one Member_skill
     * const member_skill = await prisma.member_skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Member_skillUpdateArgs>(args: SelectSubset<T, Member_skillUpdateArgs<ExtArgs>>): Prisma__Member_skillClient<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Member_skills.
     * @param {Member_skillDeleteManyArgs} args - Arguments to filter Member_skills to delete.
     * @example
     * // Delete a few Member_skills
     * const { count } = await prisma.member_skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Member_skillDeleteManyArgs>(args?: SelectSubset<T, Member_skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Member_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Member_skills
     * const member_skill = await prisma.member_skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Member_skillUpdateManyArgs>(args: SelectSubset<T, Member_skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member_skill.
     * @param {Member_skillUpsertArgs} args - Arguments to update or create a Member_skill.
     * @example
     * // Update or create a Member_skill
     * const member_skill = await prisma.member_skill.upsert({
     *   create: {
     *     // ... data to create a Member_skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member_skill we want to update
     *   }
     * })
     */
    upsert<T extends Member_skillUpsertArgs>(args: SelectSubset<T, Member_skillUpsertArgs<ExtArgs>>): Prisma__Member_skillClient<$Result.GetResult<Prisma.$Member_skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Member_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_skillCountArgs} args - Arguments to filter Member_skills to count.
     * @example
     * // Count the number of Member_skills
     * const count = await prisma.member_skill.count({
     *   where: {
     *     // ... the filter for the Member_skills we want to count
     *   }
     * })
    **/
    count<T extends Member_skillCountArgs>(
      args?: Subset<T, Member_skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Member_skillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_skillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Member_skillAggregateArgs>(args: Subset<T, Member_skillAggregateArgs>): Prisma.PrismaPromise<GetMember_skillAggregateType<T>>

    /**
     * Group by Member_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_skillGroupByArgs} args - Group by arguments.
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
      T extends Member_skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Member_skillGroupByArgs['orderBy'] }
        : { orderBy?: Member_skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Member_skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMember_skillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member_skill model
   */
  readonly fields: Member_skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member_skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Member_skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Member_skill model
   */
  interface Member_skillFieldRefs {
    readonly member_id: FieldRef<"Member_skill", 'Int'>
    readonly skill_id: FieldRef<"Member_skill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Member_skill findUnique
   */
  export type Member_skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    /**
     * Filter, which Member_skill to fetch.
     */
    where: Member_skillWhereUniqueInput
  }

  /**
   * Member_skill findUniqueOrThrow
   */
  export type Member_skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    /**
     * Filter, which Member_skill to fetch.
     */
    where: Member_skillWhereUniqueInput
  }

  /**
   * Member_skill findFirst
   */
  export type Member_skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    /**
     * Filter, which Member_skill to fetch.
     */
    where?: Member_skillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_skills to fetch.
     */
    orderBy?: Member_skillOrderByWithRelationInput | Member_skillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Member_skills.
     */
    cursor?: Member_skillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_skills.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Member_skills.
     */
    distinct?: Member_skillScalarFieldEnum | Member_skillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member_skill findFirstOrThrow
   */
  export type Member_skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    /**
     * Filter, which Member_skill to fetch.
     */
    where?: Member_skillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_skills to fetch.
     */
    orderBy?: Member_skillOrderByWithRelationInput | Member_skillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Member_skills.
     */
    cursor?: Member_skillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_skills.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Member_skills.
     */
    distinct?: Member_skillScalarFieldEnum | Member_skillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member_skill findMany
   */
  export type Member_skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    /**
     * Filter, which Member_skills to fetch.
     */
    where?: Member_skillWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_skills to fetch.
     */
    orderBy?: Member_skillOrderByWithRelationInput | Member_skillOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Member_skills.
     */
    cursor?: Member_skillWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_skills from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_skills.
     */
    skip?: number | $Types.Skip
    distinct?: Member_skillScalarFieldEnum | Member_skillScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member_skill create
   */
  export type Member_skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    /**
     * The data needed to create a Member_skill.
     */
    data: XOR<Member_skillCreateInput, Member_skillUncheckedCreateInput>
  }

  /**
   * Member_skill createMany
   */
  export type Member_skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Member_skills.
     */
    data: Member_skillCreateManyInput | Member_skillCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Member_skill update
   */
  export type Member_skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    /**
     * The data needed to update a Member_skill.
     */
    data: XOR<Member_skillUpdateInput, Member_skillUncheckedUpdateInput>
    /**
     * Choose, which Member_skill to update.
     */
    where: Member_skillWhereUniqueInput
  }

  /**
   * Member_skill updateMany
   */
  export type Member_skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Member_skills.
     */
    data: XOR<Member_skillUpdateManyMutationInput, Member_skillUncheckedUpdateManyInput>
    /**
     * Filter which Member_skills to update
     */
    where?: Member_skillWhereInput | $Types.Skip
    /**
     * Limit how many Member_skills to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Member_skill upsert
   */
  export type Member_skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    /**
     * The filter to search for the Member_skill to update in case it exists.
     */
    where: Member_skillWhereUniqueInput
    /**
     * In case the Member_skill found by the `where` argument doesn't exist, create a new Member_skill with this data.
     */
    create: XOR<Member_skillCreateInput, Member_skillUncheckedCreateInput>
    /**
     * In case the Member_skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Member_skillUpdateInput, Member_skillUncheckedUpdateInput>
  }

  /**
   * Member_skill delete
   */
  export type Member_skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
    /**
     * Filter which Member_skill to delete.
     */
    where: Member_skillWhereUniqueInput
  }

  /**
   * Member_skill deleteMany
   */
  export type Member_skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member_skills to delete
     */
    where?: Member_skillWhereInput | $Types.Skip
    /**
     * Limit how many Member_skills to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Member_skill without action
   */
  export type Member_skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_skill
     */
    select?: Member_skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_skill
     */
    omit?: Member_skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_skillInclude<ExtArgs> | null
  }


  /**
   * Model Member_langue
   */

  export type AggregateMember_langue = {
    _count: Member_langueCountAggregateOutputType | null
    _avg: Member_langueAvgAggregateOutputType | null
    _sum: Member_langueSumAggregateOutputType | null
    _min: Member_langueMinAggregateOutputType | null
    _max: Member_langueMaxAggregateOutputType | null
  }

  export type Member_langueAvgAggregateOutputType = {
    member_id: number | null
    langue_id: number | null
  }

  export type Member_langueSumAggregateOutputType = {
    member_id: number | null
    langue_id: number | null
  }

  export type Member_langueMinAggregateOutputType = {
    member_id: number | null
    langue_id: number | null
    level: string | null
  }

  export type Member_langueMaxAggregateOutputType = {
    member_id: number | null
    langue_id: number | null
    level: string | null
  }

  export type Member_langueCountAggregateOutputType = {
    member_id: number
    langue_id: number
    level: number
    _all: number
  }


  export type Member_langueAvgAggregateInputType = {
    member_id?: true | $Types.Skip
    langue_id?: true | $Types.Skip
  }

  export type Member_langueSumAggregateInputType = {
    member_id?: true | $Types.Skip
    langue_id?: true | $Types.Skip
  }

  export type Member_langueMinAggregateInputType = {
    member_id?: true | $Types.Skip
    langue_id?: true | $Types.Skip
    level?: true | $Types.Skip
  }

  export type Member_langueMaxAggregateInputType = {
    member_id?: true | $Types.Skip
    langue_id?: true | $Types.Skip
    level?: true | $Types.Skip
  }

  export type Member_langueCountAggregateInputType = {
    member_id?: true | $Types.Skip
    langue_id?: true | $Types.Skip
    level?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type Member_langueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member_langue to aggregate.
     */
    where?: Member_langueWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_langues to fetch.
     */
    orderBy?: Member_langueOrderByWithRelationInput | Member_langueOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Member_langueWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_langues from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_langues.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Member_langues
    **/
    _count?: true | Member_langueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Member_langueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Member_langueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Member_langueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Member_langueMaxAggregateInputType
  }

  export type GetMember_langueAggregateType<T extends Member_langueAggregateArgs> = {
        [P in keyof T & keyof AggregateMember_langue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember_langue[P]>
      : GetScalarType<T[P], AggregateMember_langue[P]>
  }




  export type Member_langueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Member_langueWhereInput | $Types.Skip
    orderBy?: Member_langueOrderByWithAggregationInput | Member_langueOrderByWithAggregationInput[] | $Types.Skip
    by: Member_langueScalarFieldEnum[] | Member_langueScalarFieldEnum
    having?: Member_langueScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: Member_langueCountAggregateInputType | true
    _avg?: Member_langueAvgAggregateInputType
    _sum?: Member_langueSumAggregateInputType
    _min?: Member_langueMinAggregateInputType
    _max?: Member_langueMaxAggregateInputType
  }

  export type Member_langueGroupByOutputType = {
    member_id: number
    langue_id: number
    level: string | null
    _count: Member_langueCountAggregateOutputType | null
    _avg: Member_langueAvgAggregateOutputType | null
    _sum: Member_langueSumAggregateOutputType | null
    _min: Member_langueMinAggregateOutputType | null
    _max: Member_langueMaxAggregateOutputType | null
  }

  type GetMember_langueGroupByPayload<T extends Member_langueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Member_langueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Member_langueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Member_langueGroupByOutputType[P]>
            : GetScalarType<T[P], Member_langueGroupByOutputType[P]>
        }
      >
    >


  export type Member_langueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean | $Types.Skip
    langue_id?: boolean | $Types.Skip
    level?: boolean | $Types.Skip
    langue?: boolean | LangueDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["member_langue"]>



  export type Member_langueSelectScalar = {
    member_id?: boolean | $Types.Skip
    langue_id?: boolean | $Types.Skip
    level?: boolean | $Types.Skip
  }

  export type Member_langueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"member_id" | "langue_id" | "level", ExtArgs["result"]["member_langue"], $Types.Skip>
  export type Member_langueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    langue?: boolean | LangueDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $Member_languePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member_langue"
    objects: {
      langue: Prisma.$LanguePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      langue_id: number
      level: string | null
    }, ExtArgs["result"]["member_langue"]>
    composites: {}
  }

  type Member_langueGetPayload<S extends boolean | null | undefined | Member_langueDefaultArgs> = $Result.GetResult<Prisma.$Member_languePayload, S>

  type Member_langueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Member_langueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Member_langueCountAggregateInputType | true
    }

  export interface Member_langueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member_langue'], meta: { name: 'Member_langue' } }
    /**
     * Find zero or one Member_langue that matches the filter.
     * @param {Member_langueFindUniqueArgs} args - Arguments to find a Member_langue
     * @example
     * // Get one Member_langue
     * const member_langue = await prisma.member_langue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Member_langueFindUniqueArgs>(args: SelectSubset<T, Member_langueFindUniqueArgs<ExtArgs>>): Prisma__Member_langueClient<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member_langue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Member_langueFindUniqueOrThrowArgs} args - Arguments to find a Member_langue
     * @example
     * // Get one Member_langue
     * const member_langue = await prisma.member_langue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Member_langueFindUniqueOrThrowArgs>(args: SelectSubset<T, Member_langueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Member_langueClient<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_langue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_langueFindFirstArgs} args - Arguments to find a Member_langue
     * @example
     * // Get one Member_langue
     * const member_langue = await prisma.member_langue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Member_langueFindFirstArgs>(args?: SelectSubset<T, Member_langueFindFirstArgs<ExtArgs>>): Prisma__Member_langueClient<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_langue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_langueFindFirstOrThrowArgs} args - Arguments to find a Member_langue
     * @example
     * // Get one Member_langue
     * const member_langue = await prisma.member_langue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Member_langueFindFirstOrThrowArgs>(args?: SelectSubset<T, Member_langueFindFirstOrThrowArgs<ExtArgs>>): Prisma__Member_langueClient<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Member_langues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_langueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Member_langues
     * const member_langues = await prisma.member_langue.findMany()
     * 
     * // Get first 10 Member_langues
     * const member_langues = await prisma.member_langue.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const member_langueWithMember_idOnly = await prisma.member_langue.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends Member_langueFindManyArgs>(args?: SelectSubset<T, Member_langueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member_langue.
     * @param {Member_langueCreateArgs} args - Arguments to create a Member_langue.
     * @example
     * // Create one Member_langue
     * const Member_langue = await prisma.member_langue.create({
     *   data: {
     *     // ... data to create a Member_langue
     *   }
     * })
     * 
     */
    create<T extends Member_langueCreateArgs>(args: SelectSubset<T, Member_langueCreateArgs<ExtArgs>>): Prisma__Member_langueClient<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Member_langues.
     * @param {Member_langueCreateManyArgs} args - Arguments to create many Member_langues.
     * @example
     * // Create many Member_langues
     * const member_langue = await prisma.member_langue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Member_langueCreateManyArgs>(args?: SelectSubset<T, Member_langueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member_langue.
     * @param {Member_langueDeleteArgs} args - Arguments to delete one Member_langue.
     * @example
     * // Delete one Member_langue
     * const Member_langue = await prisma.member_langue.delete({
     *   where: {
     *     // ... filter to delete one Member_langue
     *   }
     * })
     * 
     */
    delete<T extends Member_langueDeleteArgs>(args: SelectSubset<T, Member_langueDeleteArgs<ExtArgs>>): Prisma__Member_langueClient<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member_langue.
     * @param {Member_langueUpdateArgs} args - Arguments to update one Member_langue.
     * @example
     * // Update one Member_langue
     * const member_langue = await prisma.member_langue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Member_langueUpdateArgs>(args: SelectSubset<T, Member_langueUpdateArgs<ExtArgs>>): Prisma__Member_langueClient<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Member_langues.
     * @param {Member_langueDeleteManyArgs} args - Arguments to filter Member_langues to delete.
     * @example
     * // Delete a few Member_langues
     * const { count } = await prisma.member_langue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Member_langueDeleteManyArgs>(args?: SelectSubset<T, Member_langueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Member_langues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_langueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Member_langues
     * const member_langue = await prisma.member_langue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Member_langueUpdateManyArgs>(args: SelectSubset<T, Member_langueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member_langue.
     * @param {Member_langueUpsertArgs} args - Arguments to update or create a Member_langue.
     * @example
     * // Update or create a Member_langue
     * const member_langue = await prisma.member_langue.upsert({
     *   create: {
     *     // ... data to create a Member_langue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member_langue we want to update
     *   }
     * })
     */
    upsert<T extends Member_langueUpsertArgs>(args: SelectSubset<T, Member_langueUpsertArgs<ExtArgs>>): Prisma__Member_langueClient<$Result.GetResult<Prisma.$Member_languePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Member_langues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_langueCountArgs} args - Arguments to filter Member_langues to count.
     * @example
     * // Count the number of Member_langues
     * const count = await prisma.member_langue.count({
     *   where: {
     *     // ... the filter for the Member_langues we want to count
     *   }
     * })
    **/
    count<T extends Member_langueCountArgs>(
      args?: Subset<T, Member_langueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Member_langueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member_langue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_langueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Member_langueAggregateArgs>(args: Subset<T, Member_langueAggregateArgs>): Prisma.PrismaPromise<GetMember_langueAggregateType<T>>

    /**
     * Group by Member_langue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_langueGroupByArgs} args - Group by arguments.
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
      T extends Member_langueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Member_langueGroupByArgs['orderBy'] }
        : { orderBy?: Member_langueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Member_langueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMember_langueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member_langue model
   */
  readonly fields: Member_langueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member_langue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Member_langueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    langue<T extends LangueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LangueDefaultArgs<ExtArgs>>): Prisma__LangueClient<$Result.GetResult<Prisma.$LanguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Member_langue model
   */
  interface Member_langueFieldRefs {
    readonly member_id: FieldRef<"Member_langue", 'Int'>
    readonly langue_id: FieldRef<"Member_langue", 'Int'>
    readonly level: FieldRef<"Member_langue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Member_langue findUnique
   */
  export type Member_langueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    /**
     * Filter, which Member_langue to fetch.
     */
    where: Member_langueWhereUniqueInput
  }

  /**
   * Member_langue findUniqueOrThrow
   */
  export type Member_langueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    /**
     * Filter, which Member_langue to fetch.
     */
    where: Member_langueWhereUniqueInput
  }

  /**
   * Member_langue findFirst
   */
  export type Member_langueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    /**
     * Filter, which Member_langue to fetch.
     */
    where?: Member_langueWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_langues to fetch.
     */
    orderBy?: Member_langueOrderByWithRelationInput | Member_langueOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Member_langues.
     */
    cursor?: Member_langueWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_langues from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_langues.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Member_langues.
     */
    distinct?: Member_langueScalarFieldEnum | Member_langueScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member_langue findFirstOrThrow
   */
  export type Member_langueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    /**
     * Filter, which Member_langue to fetch.
     */
    where?: Member_langueWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_langues to fetch.
     */
    orderBy?: Member_langueOrderByWithRelationInput | Member_langueOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Member_langues.
     */
    cursor?: Member_langueWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_langues from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_langues.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Member_langues.
     */
    distinct?: Member_langueScalarFieldEnum | Member_langueScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member_langue findMany
   */
  export type Member_langueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    /**
     * Filter, which Member_langues to fetch.
     */
    where?: Member_langueWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_langues to fetch.
     */
    orderBy?: Member_langueOrderByWithRelationInput | Member_langueOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Member_langues.
     */
    cursor?: Member_langueWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_langues from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_langues.
     */
    skip?: number | $Types.Skip
    distinct?: Member_langueScalarFieldEnum | Member_langueScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member_langue create
   */
  export type Member_langueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    /**
     * The data needed to create a Member_langue.
     */
    data: XOR<Member_langueCreateInput, Member_langueUncheckedCreateInput>
  }

  /**
   * Member_langue createMany
   */
  export type Member_langueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Member_langues.
     */
    data: Member_langueCreateManyInput | Member_langueCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Member_langue update
   */
  export type Member_langueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    /**
     * The data needed to update a Member_langue.
     */
    data: XOR<Member_langueUpdateInput, Member_langueUncheckedUpdateInput>
    /**
     * Choose, which Member_langue to update.
     */
    where: Member_langueWhereUniqueInput
  }

  /**
   * Member_langue updateMany
   */
  export type Member_langueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Member_langues.
     */
    data: XOR<Member_langueUpdateManyMutationInput, Member_langueUncheckedUpdateManyInput>
    /**
     * Filter which Member_langues to update
     */
    where?: Member_langueWhereInput | $Types.Skip
    /**
     * Limit how many Member_langues to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Member_langue upsert
   */
  export type Member_langueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    /**
     * The filter to search for the Member_langue to update in case it exists.
     */
    where: Member_langueWhereUniqueInput
    /**
     * In case the Member_langue found by the `where` argument doesn't exist, create a new Member_langue with this data.
     */
    create: XOR<Member_langueCreateInput, Member_langueUncheckedCreateInput>
    /**
     * In case the Member_langue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Member_langueUpdateInput, Member_langueUncheckedUpdateInput>
  }

  /**
   * Member_langue delete
   */
  export type Member_langueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
    /**
     * Filter which Member_langue to delete.
     */
    where: Member_langueWhereUniqueInput
  }

  /**
   * Member_langue deleteMany
   */
  export type Member_langueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member_langues to delete
     */
    where?: Member_langueWhereInput | $Types.Skip
    /**
     * Limit how many Member_langues to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Member_langue without action
   */
  export type Member_langueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_langue
     */
    select?: Member_langueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_langue
     */
    omit?: Member_langueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_langueInclude<ExtArgs> | null
  }


  /**
   * Model Member_offer
   */

  export type AggregateMember_offer = {
    _count: Member_offerCountAggregateOutputType | null
    _avg: Member_offerAvgAggregateOutputType | null
    _sum: Member_offerSumAggregateOutputType | null
    _min: Member_offerMinAggregateOutputType | null
    _max: Member_offerMaxAggregateOutputType | null
  }

  export type Member_offerAvgAggregateOutputType = {
    member_id: number | null
    offer_id: number | null
  }

  export type Member_offerSumAggregateOutputType = {
    member_id: number | null
    offer_id: number | null
  }

  export type Member_offerMinAggregateOutputType = {
    member_id: number | null
    offer_id: number | null
  }

  export type Member_offerMaxAggregateOutputType = {
    member_id: number | null
    offer_id: number | null
  }

  export type Member_offerCountAggregateOutputType = {
    member_id: number
    offer_id: number
    _all: number
  }


  export type Member_offerAvgAggregateInputType = {
    member_id?: true | $Types.Skip
    offer_id?: true | $Types.Skip
  }

  export type Member_offerSumAggregateInputType = {
    member_id?: true | $Types.Skip
    offer_id?: true | $Types.Skip
  }

  export type Member_offerMinAggregateInputType = {
    member_id?: true | $Types.Skip
    offer_id?: true | $Types.Skip
  }

  export type Member_offerMaxAggregateInputType = {
    member_id?: true | $Types.Skip
    offer_id?: true | $Types.Skip
  }

  export type Member_offerCountAggregateInputType = {
    member_id?: true | $Types.Skip
    offer_id?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type Member_offerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member_offer to aggregate.
     */
    where?: Member_offerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_offers to fetch.
     */
    orderBy?: Member_offerOrderByWithRelationInput | Member_offerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Member_offerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_offers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_offers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Member_offers
    **/
    _count?: true | Member_offerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Member_offerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Member_offerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Member_offerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Member_offerMaxAggregateInputType
  }

  export type GetMember_offerAggregateType<T extends Member_offerAggregateArgs> = {
        [P in keyof T & keyof AggregateMember_offer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember_offer[P]>
      : GetScalarType<T[P], AggregateMember_offer[P]>
  }




  export type Member_offerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Member_offerWhereInput | $Types.Skip
    orderBy?: Member_offerOrderByWithAggregationInput | Member_offerOrderByWithAggregationInput[] | $Types.Skip
    by: Member_offerScalarFieldEnum[] | Member_offerScalarFieldEnum
    having?: Member_offerScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: Member_offerCountAggregateInputType | true
    _avg?: Member_offerAvgAggregateInputType
    _sum?: Member_offerSumAggregateInputType
    _min?: Member_offerMinAggregateInputType
    _max?: Member_offerMaxAggregateInputType
  }

  export type Member_offerGroupByOutputType = {
    member_id: number
    offer_id: number
    _count: Member_offerCountAggregateOutputType | null
    _avg: Member_offerAvgAggregateOutputType | null
    _sum: Member_offerSumAggregateOutputType | null
    _min: Member_offerMinAggregateOutputType | null
    _max: Member_offerMaxAggregateOutputType | null
  }

  type GetMember_offerGroupByPayload<T extends Member_offerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Member_offerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Member_offerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Member_offerGroupByOutputType[P]>
            : GetScalarType<T[P], Member_offerGroupByOutputType[P]>
        }
      >
    >


  export type Member_offerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean | $Types.Skip
    offer_id?: boolean | $Types.Skip
    job_offer?: boolean | Job_offerDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["member_offer"]>



  export type Member_offerSelectScalar = {
    member_id?: boolean | $Types.Skip
    offer_id?: boolean | $Types.Skip
  }

  export type Member_offerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"member_id" | "offer_id", ExtArgs["result"]["member_offer"], $Types.Skip>
  export type Member_offerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_offer?: boolean | Job_offerDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $Member_offerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member_offer"
    objects: {
      job_offer: Prisma.$Job_offerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      offer_id: number
    }, ExtArgs["result"]["member_offer"]>
    composites: {}
  }

  type Member_offerGetPayload<S extends boolean | null | undefined | Member_offerDefaultArgs> = $Result.GetResult<Prisma.$Member_offerPayload, S>

  type Member_offerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Member_offerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Member_offerCountAggregateInputType | true
    }

  export interface Member_offerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member_offer'], meta: { name: 'Member_offer' } }
    /**
     * Find zero or one Member_offer that matches the filter.
     * @param {Member_offerFindUniqueArgs} args - Arguments to find a Member_offer
     * @example
     * // Get one Member_offer
     * const member_offer = await prisma.member_offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Member_offerFindUniqueArgs>(args: SelectSubset<T, Member_offerFindUniqueArgs<ExtArgs>>): Prisma__Member_offerClient<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member_offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Member_offerFindUniqueOrThrowArgs} args - Arguments to find a Member_offer
     * @example
     * // Get one Member_offer
     * const member_offer = await prisma.member_offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Member_offerFindUniqueOrThrowArgs>(args: SelectSubset<T, Member_offerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Member_offerClient<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_offerFindFirstArgs} args - Arguments to find a Member_offer
     * @example
     * // Get one Member_offer
     * const member_offer = await prisma.member_offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Member_offerFindFirstArgs>(args?: SelectSubset<T, Member_offerFindFirstArgs<ExtArgs>>): Prisma__Member_offerClient<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_offerFindFirstOrThrowArgs} args - Arguments to find a Member_offer
     * @example
     * // Get one Member_offer
     * const member_offer = await prisma.member_offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Member_offerFindFirstOrThrowArgs>(args?: SelectSubset<T, Member_offerFindFirstOrThrowArgs<ExtArgs>>): Prisma__Member_offerClient<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Member_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_offerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Member_offers
     * const member_offers = await prisma.member_offer.findMany()
     * 
     * // Get first 10 Member_offers
     * const member_offers = await prisma.member_offer.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const member_offerWithMember_idOnly = await prisma.member_offer.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends Member_offerFindManyArgs>(args?: SelectSubset<T, Member_offerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member_offer.
     * @param {Member_offerCreateArgs} args - Arguments to create a Member_offer.
     * @example
     * // Create one Member_offer
     * const Member_offer = await prisma.member_offer.create({
     *   data: {
     *     // ... data to create a Member_offer
     *   }
     * })
     * 
     */
    create<T extends Member_offerCreateArgs>(args: SelectSubset<T, Member_offerCreateArgs<ExtArgs>>): Prisma__Member_offerClient<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Member_offers.
     * @param {Member_offerCreateManyArgs} args - Arguments to create many Member_offers.
     * @example
     * // Create many Member_offers
     * const member_offer = await prisma.member_offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Member_offerCreateManyArgs>(args?: SelectSubset<T, Member_offerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member_offer.
     * @param {Member_offerDeleteArgs} args - Arguments to delete one Member_offer.
     * @example
     * // Delete one Member_offer
     * const Member_offer = await prisma.member_offer.delete({
     *   where: {
     *     // ... filter to delete one Member_offer
     *   }
     * })
     * 
     */
    delete<T extends Member_offerDeleteArgs>(args: SelectSubset<T, Member_offerDeleteArgs<ExtArgs>>): Prisma__Member_offerClient<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member_offer.
     * @param {Member_offerUpdateArgs} args - Arguments to update one Member_offer.
     * @example
     * // Update one Member_offer
     * const member_offer = await prisma.member_offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Member_offerUpdateArgs>(args: SelectSubset<T, Member_offerUpdateArgs<ExtArgs>>): Prisma__Member_offerClient<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Member_offers.
     * @param {Member_offerDeleteManyArgs} args - Arguments to filter Member_offers to delete.
     * @example
     * // Delete a few Member_offers
     * const { count } = await prisma.member_offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Member_offerDeleteManyArgs>(args?: SelectSubset<T, Member_offerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Member_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_offerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Member_offers
     * const member_offer = await prisma.member_offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Member_offerUpdateManyArgs>(args: SelectSubset<T, Member_offerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member_offer.
     * @param {Member_offerUpsertArgs} args - Arguments to update or create a Member_offer.
     * @example
     * // Update or create a Member_offer
     * const member_offer = await prisma.member_offer.upsert({
     *   create: {
     *     // ... data to create a Member_offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member_offer we want to update
     *   }
     * })
     */
    upsert<T extends Member_offerUpsertArgs>(args: SelectSubset<T, Member_offerUpsertArgs<ExtArgs>>): Prisma__Member_offerClient<$Result.GetResult<Prisma.$Member_offerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Member_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_offerCountArgs} args - Arguments to filter Member_offers to count.
     * @example
     * // Count the number of Member_offers
     * const count = await prisma.member_offer.count({
     *   where: {
     *     // ... the filter for the Member_offers we want to count
     *   }
     * })
    **/
    count<T extends Member_offerCountArgs>(
      args?: Subset<T, Member_offerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Member_offerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member_offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_offerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Member_offerAggregateArgs>(args: Subset<T, Member_offerAggregateArgs>): Prisma.PrismaPromise<GetMember_offerAggregateType<T>>

    /**
     * Group by Member_offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_offerGroupByArgs} args - Group by arguments.
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
      T extends Member_offerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Member_offerGroupByArgs['orderBy'] }
        : { orderBy?: Member_offerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Member_offerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMember_offerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member_offer model
   */
  readonly fields: Member_offerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member_offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Member_offerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job_offer<T extends Job_offerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Job_offerDefaultArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Member_offer model
   */
  interface Member_offerFieldRefs {
    readonly member_id: FieldRef<"Member_offer", 'Int'>
    readonly offer_id: FieldRef<"Member_offer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Member_offer findUnique
   */
  export type Member_offerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    /**
     * Filter, which Member_offer to fetch.
     */
    where: Member_offerWhereUniqueInput
  }

  /**
   * Member_offer findUniqueOrThrow
   */
  export type Member_offerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    /**
     * Filter, which Member_offer to fetch.
     */
    where: Member_offerWhereUniqueInput
  }

  /**
   * Member_offer findFirst
   */
  export type Member_offerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    /**
     * Filter, which Member_offer to fetch.
     */
    where?: Member_offerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_offers to fetch.
     */
    orderBy?: Member_offerOrderByWithRelationInput | Member_offerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Member_offers.
     */
    cursor?: Member_offerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_offers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_offers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Member_offers.
     */
    distinct?: Member_offerScalarFieldEnum | Member_offerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member_offer findFirstOrThrow
   */
  export type Member_offerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    /**
     * Filter, which Member_offer to fetch.
     */
    where?: Member_offerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_offers to fetch.
     */
    orderBy?: Member_offerOrderByWithRelationInput | Member_offerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Member_offers.
     */
    cursor?: Member_offerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_offers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_offers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Member_offers.
     */
    distinct?: Member_offerScalarFieldEnum | Member_offerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member_offer findMany
   */
  export type Member_offerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    /**
     * Filter, which Member_offers to fetch.
     */
    where?: Member_offerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_offers to fetch.
     */
    orderBy?: Member_offerOrderByWithRelationInput | Member_offerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Member_offers.
     */
    cursor?: Member_offerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_offers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_offers.
     */
    skip?: number | $Types.Skip
    distinct?: Member_offerScalarFieldEnum | Member_offerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Member_offer create
   */
  export type Member_offerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    /**
     * The data needed to create a Member_offer.
     */
    data: XOR<Member_offerCreateInput, Member_offerUncheckedCreateInput>
  }

  /**
   * Member_offer createMany
   */
  export type Member_offerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Member_offers.
     */
    data: Member_offerCreateManyInput | Member_offerCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Member_offer update
   */
  export type Member_offerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    /**
     * The data needed to update a Member_offer.
     */
    data: XOR<Member_offerUpdateInput, Member_offerUncheckedUpdateInput>
    /**
     * Choose, which Member_offer to update.
     */
    where: Member_offerWhereUniqueInput
  }

  /**
   * Member_offer updateMany
   */
  export type Member_offerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Member_offers.
     */
    data: XOR<Member_offerUpdateManyMutationInput, Member_offerUncheckedUpdateManyInput>
    /**
     * Filter which Member_offers to update
     */
    where?: Member_offerWhereInput | $Types.Skip
    /**
     * Limit how many Member_offers to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Member_offer upsert
   */
  export type Member_offerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    /**
     * The filter to search for the Member_offer to update in case it exists.
     */
    where: Member_offerWhereUniqueInput
    /**
     * In case the Member_offer found by the `where` argument doesn't exist, create a new Member_offer with this data.
     */
    create: XOR<Member_offerCreateInput, Member_offerUncheckedCreateInput>
    /**
     * In case the Member_offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Member_offerUpdateInput, Member_offerUncheckedUpdateInput>
  }

  /**
   * Member_offer delete
   */
  export type Member_offerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
    /**
     * Filter which Member_offer to delete.
     */
    where: Member_offerWhereUniqueInput
  }

  /**
   * Member_offer deleteMany
   */
  export type Member_offerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member_offers to delete
     */
    where?: Member_offerWhereInput | $Types.Skip
    /**
     * Limit how many Member_offers to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Member_offer without action
   */
  export type Member_offerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_offer
     */
    select?: Member_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_offer
     */
    omit?: Member_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_offerInclude<ExtArgs> | null
  }


  /**
   * Model Candidacy
   */

  export type AggregateCandidacy = {
    _count: CandidacyCountAggregateOutputType | null
    _avg: CandidacyAvgAggregateOutputType | null
    _sum: CandidacySumAggregateOutputType | null
    _min: CandidacyMinAggregateOutputType | null
    _max: CandidacyMaxAggregateOutputType | null
  }

  export type CandidacyAvgAggregateOutputType = {
    member_id: number | null
    job_offer_id: number | null
  }

  export type CandidacySumAggregateOutputType = {
    member_id: number | null
    job_offer_id: number | null
  }

  export type CandidacyMinAggregateOutputType = {
    member_id: number | null
    cv_id: string | null
    job_offer_id: number | null
    remember: Date | null
    status: $Enums.Status | null
    description: string | null
  }

  export type CandidacyMaxAggregateOutputType = {
    member_id: number | null
    cv_id: string | null
    job_offer_id: number | null
    remember: Date | null
    status: $Enums.Status | null
    description: string | null
  }

  export type CandidacyCountAggregateOutputType = {
    member_id: number
    cv_id: number
    job_offer_id: number
    remember: number
    status: number
    description: number
    _all: number
  }


  export type CandidacyAvgAggregateInputType = {
    member_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
  }

  export type CandidacySumAggregateInputType = {
    member_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
  }

  export type CandidacyMinAggregateInputType = {
    member_id?: true | $Types.Skip
    cv_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
    remember?: true | $Types.Skip
    status?: true | $Types.Skip
    description?: true | $Types.Skip
  }

  export type CandidacyMaxAggregateInputType = {
    member_id?: true | $Types.Skip
    cv_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
    remember?: true | $Types.Skip
    status?: true | $Types.Skip
    description?: true | $Types.Skip
  }

  export type CandidacyCountAggregateInputType = {
    member_id?: true | $Types.Skip
    cv_id?: true | $Types.Skip
    job_offer_id?: true | $Types.Skip
    remember?: true | $Types.Skip
    status?: true | $Types.Skip
    description?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CandidacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidacy to aggregate.
     */
    where?: CandidacyWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidacies to fetch.
     */
    orderBy?: CandidacyOrderByWithRelationInput | CandidacyOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidacyWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidacies from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidacies.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidacies
    **/
    _count?: true | CandidacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidacyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidacySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidacyMaxAggregateInputType
  }

  export type GetCandidacyAggregateType<T extends CandidacyAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidacy[P]>
      : GetScalarType<T[P], AggregateCandidacy[P]>
  }




  export type CandidacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidacyWhereInput | $Types.Skip
    orderBy?: CandidacyOrderByWithAggregationInput | CandidacyOrderByWithAggregationInput[] | $Types.Skip
    by: CandidacyScalarFieldEnum[] | CandidacyScalarFieldEnum
    having?: CandidacyScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CandidacyCountAggregateInputType | true
    _avg?: CandidacyAvgAggregateInputType
    _sum?: CandidacySumAggregateInputType
    _min?: CandidacyMinAggregateInputType
    _max?: CandidacyMaxAggregateInputType
  }

  export type CandidacyGroupByOutputType = {
    member_id: number
    cv_id: string
    job_offer_id: number
    remember: Date | null
    status: $Enums.Status | null
    description: string | null
    _count: CandidacyCountAggregateOutputType | null
    _avg: CandidacyAvgAggregateOutputType | null
    _sum: CandidacySumAggregateOutputType | null
    _min: CandidacyMinAggregateOutputType | null
    _max: CandidacyMaxAggregateOutputType | null
  }

  type GetCandidacyGroupByPayload<T extends CandidacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidacyGroupByOutputType[P]>
            : GetScalarType<T[P], CandidacyGroupByOutputType[P]>
        }
      >
    >


  export type CandidacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean | $Types.Skip
    cv_id?: boolean | $Types.Skip
    job_offer_id?: boolean | $Types.Skip
    remember?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    job_offer?: boolean | Job_offerDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["candidacy"]>



  export type CandidacySelectScalar = {
    member_id?: boolean | $Types.Skip
    cv_id?: boolean | $Types.Skip
    job_offer_id?: boolean | $Types.Skip
    remember?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
  }

  export type CandidacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"member_id" | "cv_id" | "job_offer_id" | "remember" | "status" | "description", ExtArgs["result"]["candidacy"], $Types.Skip>
  export type CandidacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_offer?: boolean | Job_offerDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $CandidacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidacy"
    objects: {
      job_offer: Prisma.$Job_offerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      cv_id: string
      job_offer_id: number
      remember: Date | null
      status: $Enums.Status | null
      description: string | null
    }, ExtArgs["result"]["candidacy"]>
    composites: {}
  }

  type CandidacyGetPayload<S extends boolean | null | undefined | CandidacyDefaultArgs> = $Result.GetResult<Prisma.$CandidacyPayload, S>

  type CandidacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidacyCountAggregateInputType | true
    }

  export interface CandidacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidacy'], meta: { name: 'Candidacy' } }
    /**
     * Find zero or one Candidacy that matches the filter.
     * @param {CandidacyFindUniqueArgs} args - Arguments to find a Candidacy
     * @example
     * // Get one Candidacy
     * const candidacy = await prisma.candidacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidacyFindUniqueArgs>(args: SelectSubset<T, CandidacyFindUniqueArgs<ExtArgs>>): Prisma__CandidacyClient<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidacyFindUniqueOrThrowArgs} args - Arguments to find a Candidacy
     * @example
     * // Get one Candidacy
     * const candidacy = await prisma.candidacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidacyFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidacyClient<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidacyFindFirstArgs} args - Arguments to find a Candidacy
     * @example
     * // Get one Candidacy
     * const candidacy = await prisma.candidacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidacyFindFirstArgs>(args?: SelectSubset<T, CandidacyFindFirstArgs<ExtArgs>>): Prisma__CandidacyClient<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidacyFindFirstOrThrowArgs} args - Arguments to find a Candidacy
     * @example
     * // Get one Candidacy
     * const candidacy = await prisma.candidacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidacyFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidacyClient<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidacies
     * const candidacies = await prisma.candidacy.findMany()
     * 
     * // Get first 10 Candidacies
     * const candidacies = await prisma.candidacy.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const candidacyWithMember_idOnly = await prisma.candidacy.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends CandidacyFindManyArgs>(args?: SelectSubset<T, CandidacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidacy.
     * @param {CandidacyCreateArgs} args - Arguments to create a Candidacy.
     * @example
     * // Create one Candidacy
     * const Candidacy = await prisma.candidacy.create({
     *   data: {
     *     // ... data to create a Candidacy
     *   }
     * })
     * 
     */
    create<T extends CandidacyCreateArgs>(args: SelectSubset<T, CandidacyCreateArgs<ExtArgs>>): Prisma__CandidacyClient<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidacies.
     * @param {CandidacyCreateManyArgs} args - Arguments to create many Candidacies.
     * @example
     * // Create many Candidacies
     * const candidacy = await prisma.candidacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidacyCreateManyArgs>(args?: SelectSubset<T, CandidacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Candidacy.
     * @param {CandidacyDeleteArgs} args - Arguments to delete one Candidacy.
     * @example
     * // Delete one Candidacy
     * const Candidacy = await prisma.candidacy.delete({
     *   where: {
     *     // ... filter to delete one Candidacy
     *   }
     * })
     * 
     */
    delete<T extends CandidacyDeleteArgs>(args: SelectSubset<T, CandidacyDeleteArgs<ExtArgs>>): Prisma__CandidacyClient<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidacy.
     * @param {CandidacyUpdateArgs} args - Arguments to update one Candidacy.
     * @example
     * // Update one Candidacy
     * const candidacy = await prisma.candidacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidacyUpdateArgs>(args: SelectSubset<T, CandidacyUpdateArgs<ExtArgs>>): Prisma__CandidacyClient<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidacies.
     * @param {CandidacyDeleteManyArgs} args - Arguments to filter Candidacies to delete.
     * @example
     * // Delete a few Candidacies
     * const { count } = await prisma.candidacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidacyDeleteManyArgs>(args?: SelectSubset<T, CandidacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidacies
     * const candidacy = await prisma.candidacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidacyUpdateManyArgs>(args: SelectSubset<T, CandidacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Candidacy.
     * @param {CandidacyUpsertArgs} args - Arguments to update or create a Candidacy.
     * @example
     * // Update or create a Candidacy
     * const candidacy = await prisma.candidacy.upsert({
     *   create: {
     *     // ... data to create a Candidacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidacy we want to update
     *   }
     * })
     */
    upsert<T extends CandidacyUpsertArgs>(args: SelectSubset<T, CandidacyUpsertArgs<ExtArgs>>): Prisma__CandidacyClient<$Result.GetResult<Prisma.$CandidacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidacyCountArgs} args - Arguments to filter Candidacies to count.
     * @example
     * // Count the number of Candidacies
     * const count = await prisma.candidacy.count({
     *   where: {
     *     // ... the filter for the Candidacies we want to count
     *   }
     * })
    **/
    count<T extends CandidacyCountArgs>(
      args?: Subset<T, CandidacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidacyAggregateArgs>(args: Subset<T, CandidacyAggregateArgs>): Prisma.PrismaPromise<GetCandidacyAggregateType<T>>

    /**
     * Group by Candidacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidacyGroupByArgs} args - Group by arguments.
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
      T extends CandidacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidacyGroupByArgs['orderBy'] }
        : { orderBy?: CandidacyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidacy model
   */
  readonly fields: CandidacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job_offer<T extends Job_offerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Job_offerDefaultArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Candidacy model
   */
  interface CandidacyFieldRefs {
    readonly member_id: FieldRef<"Candidacy", 'Int'>
    readonly cv_id: FieldRef<"Candidacy", 'String'>
    readonly job_offer_id: FieldRef<"Candidacy", 'Int'>
    readonly remember: FieldRef<"Candidacy", 'DateTime'>
    readonly status: FieldRef<"Candidacy", 'Status'>
    readonly description: FieldRef<"Candidacy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Candidacy findUnique
   */
  export type CandidacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    /**
     * Filter, which Candidacy to fetch.
     */
    where: CandidacyWhereUniqueInput
  }

  /**
   * Candidacy findUniqueOrThrow
   */
  export type CandidacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    /**
     * Filter, which Candidacy to fetch.
     */
    where: CandidacyWhereUniqueInput
  }

  /**
   * Candidacy findFirst
   */
  export type CandidacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    /**
     * Filter, which Candidacy to fetch.
     */
    where?: CandidacyWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidacies to fetch.
     */
    orderBy?: CandidacyOrderByWithRelationInput | CandidacyOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidacies.
     */
    cursor?: CandidacyWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidacies from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidacies.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidacies.
     */
    distinct?: CandidacyScalarFieldEnum | CandidacyScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Candidacy findFirstOrThrow
   */
  export type CandidacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    /**
     * Filter, which Candidacy to fetch.
     */
    where?: CandidacyWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidacies to fetch.
     */
    orderBy?: CandidacyOrderByWithRelationInput | CandidacyOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidacies.
     */
    cursor?: CandidacyWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidacies from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidacies.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidacies.
     */
    distinct?: CandidacyScalarFieldEnum | CandidacyScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Candidacy findMany
   */
  export type CandidacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    /**
     * Filter, which Candidacies to fetch.
     */
    where?: CandidacyWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidacies to fetch.
     */
    orderBy?: CandidacyOrderByWithRelationInput | CandidacyOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidacies.
     */
    cursor?: CandidacyWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidacies from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidacies.
     */
    skip?: number | $Types.Skip
    distinct?: CandidacyScalarFieldEnum | CandidacyScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Candidacy create
   */
  export type CandidacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidacy.
     */
    data: XOR<CandidacyCreateInput, CandidacyUncheckedCreateInput>
  }

  /**
   * Candidacy createMany
   */
  export type CandidacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidacies.
     */
    data: CandidacyCreateManyInput | CandidacyCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Candidacy update
   */
  export type CandidacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidacy.
     */
    data: XOR<CandidacyUpdateInput, CandidacyUncheckedUpdateInput>
    /**
     * Choose, which Candidacy to update.
     */
    where: CandidacyWhereUniqueInput
  }

  /**
   * Candidacy updateMany
   */
  export type CandidacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidacies.
     */
    data: XOR<CandidacyUpdateManyMutationInput, CandidacyUncheckedUpdateManyInput>
    /**
     * Filter which Candidacies to update
     */
    where?: CandidacyWhereInput | $Types.Skip
    /**
     * Limit how many Candidacies to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Candidacy upsert
   */
  export type CandidacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidacy to update in case it exists.
     */
    where: CandidacyWhereUniqueInput
    /**
     * In case the Candidacy found by the `where` argument doesn't exist, create a new Candidacy with this data.
     */
    create: XOR<CandidacyCreateInput, CandidacyUncheckedCreateInput>
    /**
     * In case the Candidacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidacyUpdateInput, CandidacyUncheckedUpdateInput>
  }

  /**
   * Candidacy delete
   */
  export type CandidacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
    /**
     * Filter which Candidacy to delete.
     */
    where: CandidacyWhereUniqueInput
  }

  /**
   * Candidacy deleteMany
   */
  export type CandidacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidacies to delete
     */
    where?: CandidacyWhereInput | $Types.Skip
    /**
     * Limit how many Candidacies to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Candidacy without action
   */
  export type CandidacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidacy
     */
    select?: CandidacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidacy
     */
    omit?: CandidacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidacyInclude<ExtArgs> | null
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


  export const ProfileScalarFieldEnum: {
    id: 'id',
    picture: 'picture',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    location: 'location',
    has_car: 'has_car',
    description: 'description',
    member_id: 'member_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const Job_offerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    ftid: 'ftid',
    location: 'location',
    contract_type: 'contract_type',
    experience_length: 'experience_length',
    professional_field: 'professional_field',
    work_time: 'work_time',
    salary: 'salary',
    handy_friendly: 'handy_friendly',
    description: 'description',
    update_ft: 'update_ft',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Job_offerScalarFieldEnum = (typeof Job_offerScalarFieldEnum)[keyof typeof Job_offerScalarFieldEnum]


  export const Job_searchScalarFieldEnum: {
    id: 'id',
    title: 'title',
    search_field: 'search_field',
    city: 'city',
    departement: 'departement',
    contract_type: 'contract_type',
    experience: 'experience',
    professional_field: 'professional_field',
    work_time: 'work_time',
    salary: 'salary',
    handy_friendly: 'handy_friendly',
    member_id: 'member_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Job_searchScalarFieldEnum = (typeof Job_searchScalarFieldEnum)[keyof typeof Job_searchScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    start_date: 'start_date',
    end_date: 'end_date',
    description: 'description',
    location: 'location',
    member_id: 'member_id',
    job_offer_id: 'job_offer_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    start_date: 'start_date',
    end_date: 'end_date',
    company_name: 'company_name',
    location: 'location',
    description: 'description',
    member_id: 'member_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    start_date: 'start_date',
    end_date: 'end_date',
    is_obtained: 'is_obtained',
    school_name: 'school_name',
    location: 'location',
    description: 'description',
    member_id: 'member_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const Mad_skillScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    member_id: 'member_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Mad_skillScalarFieldEnum = (typeof Mad_skillScalarFieldEnum)[keyof typeof Mad_skillScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    start_date: 'start_date',
    end_date: 'end_date',
    location: 'location',
    member_id: 'member_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const LangueScalarFieldEnum: {
    id: 'id',
    title: 'title',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LangueScalarFieldEnum = (typeof LangueScalarFieldEnum)[keyof typeof LangueScalarFieldEnum]


  export const Member_skillScalarFieldEnum: {
    member_id: 'member_id',
    skill_id: 'skill_id'
  };

  export type Member_skillScalarFieldEnum = (typeof Member_skillScalarFieldEnum)[keyof typeof Member_skillScalarFieldEnum]


  export const Member_langueScalarFieldEnum: {
    member_id: 'member_id',
    langue_id: 'langue_id',
    level: 'level'
  };

  export type Member_langueScalarFieldEnum = (typeof Member_langueScalarFieldEnum)[keyof typeof Member_langueScalarFieldEnum]


  export const Member_offerScalarFieldEnum: {
    member_id: 'member_id',
    offer_id: 'offer_id'
  };

  export type Member_offerScalarFieldEnum = (typeof Member_offerScalarFieldEnum)[keyof typeof Member_offerScalarFieldEnum]


  export const CandidacyScalarFieldEnum: {
    member_id: 'member_id',
    cv_id: 'cv_id',
    job_offer_id: 'job_offer_id',
    remember: 'remember',
    status: 'status',
    description: 'description'
  };

  export type CandidacyScalarFieldEnum = (typeof CandidacyScalarFieldEnum)[keyof typeof CandidacyScalarFieldEnum]


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


  export const ProfileOrderByRelevanceFieldEnum: {
    picture: 'picture',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    location: 'location',
    description: 'description'
  };

  export type ProfileOrderByRelevanceFieldEnum = (typeof ProfileOrderByRelevanceFieldEnum)[keyof typeof ProfileOrderByRelevanceFieldEnum]


  export const Job_offerOrderByRelevanceFieldEnum: {
    title: 'title',
    ftid: 'ftid',
    location: 'location',
    contract_type: 'contract_type',
    experience_length: 'experience_length',
    professional_field: 'professional_field',
    work_time: 'work_time',
    salary: 'salary',
    description: 'description'
  };

  export type Job_offerOrderByRelevanceFieldEnum = (typeof Job_offerOrderByRelevanceFieldEnum)[keyof typeof Job_offerOrderByRelevanceFieldEnum]


  export const Job_searchOrderByRelevanceFieldEnum: {
    title: 'title',
    search_field: 'search_field',
    city: 'city',
    departement: 'departement',
    contract_type: 'contract_type',
    experience: 'experience',
    professional_field: 'professional_field',
    work_time: 'work_time',
    salary: 'salary'
  };

  export type Job_searchOrderByRelevanceFieldEnum = (typeof Job_searchOrderByRelevanceFieldEnum)[keyof typeof Job_searchOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    location: 'location'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const ExperienceOrderByRelevanceFieldEnum: {
    title: 'title',
    company_name: 'company_name',
    location: 'location',
    description: 'description'
  };

  export type ExperienceOrderByRelevanceFieldEnum = (typeof ExperienceOrderByRelevanceFieldEnum)[keyof typeof ExperienceOrderByRelevanceFieldEnum]


  export const EducationOrderByRelevanceFieldEnum: {
    title: 'title',
    school_name: 'school_name',
    location: 'location',
    description: 'description'
  };

  export type EducationOrderByRelevanceFieldEnum = (typeof EducationOrderByRelevanceFieldEnum)[keyof typeof EducationOrderByRelevanceFieldEnum]


  export const SkillOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type SkillOrderByRelevanceFieldEnum = (typeof SkillOrderByRelevanceFieldEnum)[keyof typeof SkillOrderByRelevanceFieldEnum]


  export const Mad_skillOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type Mad_skillOrderByRelevanceFieldEnum = (typeof Mad_skillOrderByRelevanceFieldEnum)[keyof typeof Mad_skillOrderByRelevanceFieldEnum]


  export const ActivityOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    location: 'location'
  };

  export type ActivityOrderByRelevanceFieldEnum = (typeof ActivityOrderByRelevanceFieldEnum)[keyof typeof ActivityOrderByRelevanceFieldEnum]


  export const LangueOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type LangueOrderByRelevanceFieldEnum = (typeof LangueOrderByRelevanceFieldEnum)[keyof typeof LangueOrderByRelevanceFieldEnum]


  export const Member_langueOrderByRelevanceFieldEnum: {
    level: 'level'
  };

  export type Member_langueOrderByRelevanceFieldEnum = (typeof Member_langueOrderByRelevanceFieldEnum)[keyof typeof Member_langueOrderByRelevanceFieldEnum]


  export const CandidacyOrderByRelevanceFieldEnum: {
    cv_id: 'cv_id',
    description: 'description'
  };

  export type CandidacyOrderByRelevanceFieldEnum = (typeof CandidacyOrderByRelevanceFieldEnum)[keyof typeof CandidacyOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Skills'
   */
  export type EnumSkillsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Skills'>
    


  /**
   * Reference to a field of type 'MadSkills'
   */
  export type EnumMadSkillsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MadSkills'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[] | $Types.Skip
    OR?: ProfileWhereInput[] | $Types.Skip
    NOT?: ProfileWhereInput | ProfileWhereInput[] | $Types.Skip
    id?: IntFilter<"Profile"> | number | $Types.Skip
    picture?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    firstname?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    lastname?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    email?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    phone?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    location?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    has_car?: BoolFilter<"Profile"> | boolean | $Types.Skip
    description?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    member_id?: IntFilter<"Profile"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Profile"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Profile"> | Date | string | $Types.Skip
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    picture?: SortOrderInput | SortOrder | $Types.Skip
    firstname?: SortOrderInput | SortOrder | $Types.Skip
    lastname?: SortOrderInput | SortOrder | $Types.Skip
    email?: SortOrderInput | SortOrder | $Types.Skip
    phone?: SortOrderInput | SortOrder | $Types.Skip
    location?: SortOrderInput | SortOrder | $Types.Skip
    has_car?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _relevance?: ProfileOrderByRelevanceInput | $Types.Skip
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    member_id?: number | $Types.Skip
    AND?: ProfileWhereInput | ProfileWhereInput[] | $Types.Skip
    OR?: ProfileWhereInput[] | $Types.Skip
    NOT?: ProfileWhereInput | ProfileWhereInput[] | $Types.Skip
    picture?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    firstname?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    lastname?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    email?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    phone?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    location?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    has_car?: BoolFilter<"Profile"> | boolean | $Types.Skip
    description?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    created_at?: DateTimeFilter<"Profile"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Profile"> | Date | string | $Types.Skip
  }, "id" | "member_id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    picture?: SortOrderInput | SortOrder | $Types.Skip
    firstname?: SortOrderInput | SortOrder | $Types.Skip
    lastname?: SortOrderInput | SortOrder | $Types.Skip
    email?: SortOrderInput | SortOrder | $Types.Skip
    phone?: SortOrderInput | SortOrder | $Types.Skip
    location?: SortOrderInput | SortOrder | $Types.Skip
    has_car?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: ProfileCountOrderByAggregateInput | $Types.Skip
    _avg?: ProfileAvgOrderByAggregateInput | $Types.Skip
    _max?: ProfileMaxOrderByAggregateInput | $Types.Skip
    _min?: ProfileMinOrderByAggregateInput | $Types.Skip
    _sum?: ProfileSumOrderByAggregateInput | $Types.Skip
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ProfileScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Profile"> | number | $Types.Skip
    picture?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    firstname?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    lastname?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    email?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    location?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    has_car?: BoolWithAggregatesFilter<"Profile"> | boolean | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Profile"> | number | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Profile"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Profile"> | Date | string | $Types.Skip
  }

  export type Job_offerWhereInput = {
    AND?: Job_offerWhereInput | Job_offerWhereInput[] | $Types.Skip
    OR?: Job_offerWhereInput[] | $Types.Skip
    NOT?: Job_offerWhereInput | Job_offerWhereInput[] | $Types.Skip
    id?: IntFilter<"Job_offer"> | number | $Types.Skip
    title?: StringFilter<"Job_offer"> | string | $Types.Skip
    ftid?: StringFilter<"Job_offer"> | string | $Types.Skip
    location?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    contract_type?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    experience_length?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    professional_field?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    work_time?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    salary?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    handy_friendly?: BoolNullableFilter<"Job_offer"> | boolean | null | $Types.Skip
    description?: StringFilter<"Job_offer"> | string | $Types.Skip
    update_ft?: DateTimeNullableFilter<"Job_offer"> | Date | string | null | $Types.Skip
    created_at?: DateTimeFilter<"Job_offer"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Job_offer"> | Date | string | $Types.Skip
    Member_offer?: Member_offerListRelationFilter | $Types.Skip
    Candidacy?: CandidacyListRelationFilter | $Types.Skip
  }

  export type Job_offerOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    ftid?: SortOrder | $Types.Skip
    location?: SortOrderInput | SortOrder | $Types.Skip
    contract_type?: SortOrderInput | SortOrder | $Types.Skip
    experience_length?: SortOrderInput | SortOrder | $Types.Skip
    professional_field?: SortOrderInput | SortOrder | $Types.Skip
    work_time?: SortOrderInput | SortOrder | $Types.Skip
    salary?: SortOrderInput | SortOrder | $Types.Skip
    handy_friendly?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    update_ft?: SortOrderInput | SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    Member_offer?: Member_offerOrderByRelationAggregateInput | $Types.Skip
    Candidacy?: CandidacyOrderByRelationAggregateInput | $Types.Skip
    _relevance?: Job_offerOrderByRelevanceInput | $Types.Skip
  }

  export type Job_offerWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    ftid?: string | $Types.Skip
    AND?: Job_offerWhereInput | Job_offerWhereInput[] | $Types.Skip
    OR?: Job_offerWhereInput[] | $Types.Skip
    NOT?: Job_offerWhereInput | Job_offerWhereInput[] | $Types.Skip
    title?: StringFilter<"Job_offer"> | string | $Types.Skip
    location?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    contract_type?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    experience_length?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    professional_field?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    work_time?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    salary?: StringNullableFilter<"Job_offer"> | string | null | $Types.Skip
    handy_friendly?: BoolNullableFilter<"Job_offer"> | boolean | null | $Types.Skip
    description?: StringFilter<"Job_offer"> | string | $Types.Skip
    update_ft?: DateTimeNullableFilter<"Job_offer"> | Date | string | null | $Types.Skip
    created_at?: DateTimeFilter<"Job_offer"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Job_offer"> | Date | string | $Types.Skip
    Member_offer?: Member_offerListRelationFilter | $Types.Skip
    Candidacy?: CandidacyListRelationFilter | $Types.Skip
  }, "id" | "ftid">

  export type Job_offerOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    ftid?: SortOrder | $Types.Skip
    location?: SortOrderInput | SortOrder | $Types.Skip
    contract_type?: SortOrderInput | SortOrder | $Types.Skip
    experience_length?: SortOrderInput | SortOrder | $Types.Skip
    professional_field?: SortOrderInput | SortOrder | $Types.Skip
    work_time?: SortOrderInput | SortOrder | $Types.Skip
    salary?: SortOrderInput | SortOrder | $Types.Skip
    handy_friendly?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    update_ft?: SortOrderInput | SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: Job_offerCountOrderByAggregateInput | $Types.Skip
    _avg?: Job_offerAvgOrderByAggregateInput | $Types.Skip
    _max?: Job_offerMaxOrderByAggregateInput | $Types.Skip
    _min?: Job_offerMinOrderByAggregateInput | $Types.Skip
    _sum?: Job_offerSumOrderByAggregateInput | $Types.Skip
  }

  export type Job_offerScalarWhereWithAggregatesInput = {
    AND?: Job_offerScalarWhereWithAggregatesInput | Job_offerScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: Job_offerScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: Job_offerScalarWhereWithAggregatesInput | Job_offerScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Job_offer"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Job_offer"> | string | $Types.Skip
    ftid?: StringWithAggregatesFilter<"Job_offer"> | string | $Types.Skip
    location?: StringNullableWithAggregatesFilter<"Job_offer"> | string | null | $Types.Skip
    contract_type?: StringNullableWithAggregatesFilter<"Job_offer"> | string | null | $Types.Skip
    experience_length?: StringNullableWithAggregatesFilter<"Job_offer"> | string | null | $Types.Skip
    professional_field?: StringNullableWithAggregatesFilter<"Job_offer"> | string | null | $Types.Skip
    work_time?: StringNullableWithAggregatesFilter<"Job_offer"> | string | null | $Types.Skip
    salary?: StringNullableWithAggregatesFilter<"Job_offer"> | string | null | $Types.Skip
    handy_friendly?: BoolNullableWithAggregatesFilter<"Job_offer"> | boolean | null | $Types.Skip
    description?: StringWithAggregatesFilter<"Job_offer"> | string | $Types.Skip
    update_ft?: DateTimeNullableWithAggregatesFilter<"Job_offer"> | Date | string | null | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Job_offer"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Job_offer"> | Date | string | $Types.Skip
  }

  export type Job_searchWhereInput = {
    AND?: Job_searchWhereInput | Job_searchWhereInput[] | $Types.Skip
    OR?: Job_searchWhereInput[] | $Types.Skip
    NOT?: Job_searchWhereInput | Job_searchWhereInput[] | $Types.Skip
    id?: IntFilter<"Job_search"> | number | $Types.Skip
    title?: StringFilter<"Job_search"> | string | $Types.Skip
    search_field?: StringFilter<"Job_search"> | string | $Types.Skip
    city?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    departement?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    contract_type?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    experience?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    professional_field?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    work_time?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    salary?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    handy_friendly?: BoolNullableFilter<"Job_search"> | boolean | null | $Types.Skip
    member_id?: IntFilter<"Job_search"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Job_search"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Job_search"> | Date | string | $Types.Skip
  }

  export type Job_searchOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    search_field?: SortOrder | $Types.Skip
    city?: SortOrderInput | SortOrder | $Types.Skip
    departement?: SortOrderInput | SortOrder | $Types.Skip
    contract_type?: SortOrderInput | SortOrder | $Types.Skip
    experience?: SortOrderInput | SortOrder | $Types.Skip
    professional_field?: SortOrderInput | SortOrder | $Types.Skip
    work_time?: SortOrderInput | SortOrder | $Types.Skip
    salary?: SortOrderInput | SortOrder | $Types.Skip
    handy_friendly?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _relevance?: Job_searchOrderByRelevanceInput | $Types.Skip
  }

  export type Job_searchWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: Job_searchWhereInput | Job_searchWhereInput[] | $Types.Skip
    OR?: Job_searchWhereInput[] | $Types.Skip
    NOT?: Job_searchWhereInput | Job_searchWhereInput[] | $Types.Skip
    title?: StringFilter<"Job_search"> | string | $Types.Skip
    search_field?: StringFilter<"Job_search"> | string | $Types.Skip
    city?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    departement?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    contract_type?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    experience?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    professional_field?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    work_time?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    salary?: StringNullableFilter<"Job_search"> | string | null | $Types.Skip
    handy_friendly?: BoolNullableFilter<"Job_search"> | boolean | null | $Types.Skip
    member_id?: IntFilter<"Job_search"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Job_search"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Job_search"> | Date | string | $Types.Skip
  }, "id">

  export type Job_searchOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    search_field?: SortOrder | $Types.Skip
    city?: SortOrderInput | SortOrder | $Types.Skip
    departement?: SortOrderInput | SortOrder | $Types.Skip
    contract_type?: SortOrderInput | SortOrder | $Types.Skip
    experience?: SortOrderInput | SortOrder | $Types.Skip
    professional_field?: SortOrderInput | SortOrder | $Types.Skip
    work_time?: SortOrderInput | SortOrder | $Types.Skip
    salary?: SortOrderInput | SortOrder | $Types.Skip
    handy_friendly?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: Job_searchCountOrderByAggregateInput | $Types.Skip
    _avg?: Job_searchAvgOrderByAggregateInput | $Types.Skip
    _max?: Job_searchMaxOrderByAggregateInput | $Types.Skip
    _min?: Job_searchMinOrderByAggregateInput | $Types.Skip
    _sum?: Job_searchSumOrderByAggregateInput | $Types.Skip
  }

  export type Job_searchScalarWhereWithAggregatesInput = {
    AND?: Job_searchScalarWhereWithAggregatesInput | Job_searchScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: Job_searchScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: Job_searchScalarWhereWithAggregatesInput | Job_searchScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Job_search"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Job_search"> | string | $Types.Skip
    search_field?: StringWithAggregatesFilter<"Job_search"> | string | $Types.Skip
    city?: StringNullableWithAggregatesFilter<"Job_search"> | string | null | $Types.Skip
    departement?: StringNullableWithAggregatesFilter<"Job_search"> | string | null | $Types.Skip
    contract_type?: StringNullableWithAggregatesFilter<"Job_search"> | string | null | $Types.Skip
    experience?: StringNullableWithAggregatesFilter<"Job_search"> | string | null | $Types.Skip
    professional_field?: StringNullableWithAggregatesFilter<"Job_search"> | string | null | $Types.Skip
    work_time?: StringNullableWithAggregatesFilter<"Job_search"> | string | null | $Types.Skip
    salary?: StringNullableWithAggregatesFilter<"Job_search"> | string | null | $Types.Skip
    handy_friendly?: BoolNullableWithAggregatesFilter<"Job_search"> | boolean | null | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Job_search"> | number | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Job_search"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Job_search"> | Date | string | $Types.Skip
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[] | $Types.Skip
    OR?: EventWhereInput[] | $Types.Skip
    NOT?: EventWhereInput | EventWhereInput[] | $Types.Skip
    id?: IntFilter<"Event"> | number | $Types.Skip
    title?: StringFilter<"Event"> | string | $Types.Skip
    start_date?: DateTimeFilter<"Event"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableFilter<"Event"> | Date | string | null | $Types.Skip
    description?: StringNullableFilter<"Event"> | string | null | $Types.Skip
    location?: StringNullableFilter<"Event"> | string | null | $Types.Skip
    member_id?: IntFilter<"Event"> | number | $Types.Skip
    job_offer_id?: IntNullableFilter<"Event"> | number | null | $Types.Skip
    created_at?: DateTimeFilter<"Event"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Event"> | Date | string | $Types.Skip
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    location?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrderInput | SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _relevance?: EventOrderByRelevanceInput | $Types.Skip
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: EventWhereInput | EventWhereInput[] | $Types.Skip
    OR?: EventWhereInput[] | $Types.Skip
    NOT?: EventWhereInput | EventWhereInput[] | $Types.Skip
    title?: StringFilter<"Event"> | string | $Types.Skip
    start_date?: DateTimeFilter<"Event"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableFilter<"Event"> | Date | string | null | $Types.Skip
    description?: StringNullableFilter<"Event"> | string | null | $Types.Skip
    location?: StringNullableFilter<"Event"> | string | null | $Types.Skip
    member_id?: IntFilter<"Event"> | number | $Types.Skip
    job_offer_id?: IntNullableFilter<"Event"> | number | null | $Types.Skip
    created_at?: DateTimeFilter<"Event"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Event"> | Date | string | $Types.Skip
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    location?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrderInput | SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: EventCountOrderByAggregateInput | $Types.Skip
    _avg?: EventAvgOrderByAggregateInput | $Types.Skip
    _max?: EventMaxOrderByAggregateInput | $Types.Skip
    _min?: EventMinOrderByAggregateInput | $Types.Skip
    _sum?: EventSumOrderByAggregateInput | $Types.Skip
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: EventScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Event"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Event"> | string | $Types.Skip
    start_date?: DateTimeWithAggregatesFilter<"Event"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null | $Types.Skip
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Event"> | number | $Types.Skip
    job_offer_id?: IntNullableWithAggregatesFilter<"Event"> | number | null | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string | $Types.Skip
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[] | $Types.Skip
    OR?: ExperienceWhereInput[] | $Types.Skip
    NOT?: ExperienceWhereInput | ExperienceWhereInput[] | $Types.Skip
    id?: IntFilter<"Experience"> | number | $Types.Skip
    title?: StringFilter<"Experience"> | string | $Types.Skip
    start_date?: DateTimeFilter<"Experience"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableFilter<"Experience"> | Date | string | null | $Types.Skip
    company_name?: StringFilter<"Experience"> | string | $Types.Skip
    location?: StringFilter<"Experience"> | string | $Types.Skip
    description?: StringNullableFilter<"Experience"> | string | null | $Types.Skip
    member_id?: IntFilter<"Experience"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Experience"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Experience"> | Date | string | $Types.Skip
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrderInput | SortOrder | $Types.Skip
    company_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _relevance?: ExperienceOrderByRelevanceInput | $Types.Skip
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: ExperienceWhereInput | ExperienceWhereInput[] | $Types.Skip
    OR?: ExperienceWhereInput[] | $Types.Skip
    NOT?: ExperienceWhereInput | ExperienceWhereInput[] | $Types.Skip
    title?: StringFilter<"Experience"> | string | $Types.Skip
    start_date?: DateTimeFilter<"Experience"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableFilter<"Experience"> | Date | string | null | $Types.Skip
    company_name?: StringFilter<"Experience"> | string | $Types.Skip
    location?: StringFilter<"Experience"> | string | $Types.Skip
    description?: StringNullableFilter<"Experience"> | string | null | $Types.Skip
    member_id?: IntFilter<"Experience"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Experience"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Experience"> | Date | string | $Types.Skip
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrderInput | SortOrder | $Types.Skip
    company_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: ExperienceCountOrderByAggregateInput | $Types.Skip
    _avg?: ExperienceAvgOrderByAggregateInput | $Types.Skip
    _max?: ExperienceMaxOrderByAggregateInput | $Types.Skip
    _min?: ExperienceMinOrderByAggregateInput | $Types.Skip
    _sum?: ExperienceSumOrderByAggregateInput | $Types.Skip
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ExperienceScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Experience"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Experience"> | string | $Types.Skip
    start_date?: DateTimeWithAggregatesFilter<"Experience"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null | $Types.Skip
    company_name?: StringWithAggregatesFilter<"Experience"> | string | $Types.Skip
    location?: StringWithAggregatesFilter<"Experience"> | string | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Experience"> | string | null | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Experience"> | number | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Experience"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Experience"> | Date | string | $Types.Skip
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[] | $Types.Skip
    OR?: EducationWhereInput[] | $Types.Skip
    NOT?: EducationWhereInput | EducationWhereInput[] | $Types.Skip
    id?: IntFilter<"Education"> | number | $Types.Skip
    title?: StringFilter<"Education"> | string | $Types.Skip
    start_date?: DateTimeFilter<"Education"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableFilter<"Education"> | Date | string | null | $Types.Skip
    is_obtained?: BoolFilter<"Education"> | boolean | $Types.Skip
    school_name?: StringFilter<"Education"> | string | $Types.Skip
    location?: StringFilter<"Education"> | string | $Types.Skip
    description?: StringNullableFilter<"Education"> | string | null | $Types.Skip
    member_id?: IntFilter<"Education"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Education"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Education"> | Date | string | $Types.Skip
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrderInput | SortOrder | $Types.Skip
    is_obtained?: SortOrder | $Types.Skip
    school_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _relevance?: EducationOrderByRelevanceInput | $Types.Skip
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: EducationWhereInput | EducationWhereInput[] | $Types.Skip
    OR?: EducationWhereInput[] | $Types.Skip
    NOT?: EducationWhereInput | EducationWhereInput[] | $Types.Skip
    title?: StringFilter<"Education"> | string | $Types.Skip
    start_date?: DateTimeFilter<"Education"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableFilter<"Education"> | Date | string | null | $Types.Skip
    is_obtained?: BoolFilter<"Education"> | boolean | $Types.Skip
    school_name?: StringFilter<"Education"> | string | $Types.Skip
    location?: StringFilter<"Education"> | string | $Types.Skip
    description?: StringNullableFilter<"Education"> | string | null | $Types.Skip
    member_id?: IntFilter<"Education"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Education"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Education"> | Date | string | $Types.Skip
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrderInput | SortOrder | $Types.Skip
    is_obtained?: SortOrder | $Types.Skip
    school_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: EducationCountOrderByAggregateInput | $Types.Skip
    _avg?: EducationAvgOrderByAggregateInput | $Types.Skip
    _max?: EducationMaxOrderByAggregateInput | $Types.Skip
    _min?: EducationMinOrderByAggregateInput | $Types.Skip
    _sum?: EducationSumOrderByAggregateInput | $Types.Skip
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: EducationScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Education"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Education"> | string | $Types.Skip
    start_date?: DateTimeWithAggregatesFilter<"Education"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null | $Types.Skip
    is_obtained?: BoolWithAggregatesFilter<"Education"> | boolean | $Types.Skip
    school_name?: StringWithAggregatesFilter<"Education"> | string | $Types.Skip
    location?: StringWithAggregatesFilter<"Education"> | string | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Education"> | string | null | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Education"> | number | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Education"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Education"> | Date | string | $Types.Skip
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[] | $Types.Skip
    OR?: SkillWhereInput[] | $Types.Skip
    NOT?: SkillWhereInput | SkillWhereInput[] | $Types.Skip
    id?: IntFilter<"Skill"> | number | $Types.Skip
    title?: StringFilter<"Skill"> | string | $Types.Skip
    category?: EnumSkillsFilter<"Skill"> | $Enums.Skills | $Types.Skip
    created_at?: DateTimeFilter<"Skill"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Skill"> | Date | string | $Types.Skip
    Member_skill?: Member_skillListRelationFilter | $Types.Skip
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    Member_skill?: Member_skillOrderByRelationAggregateInput | $Types.Skip
    _relevance?: SkillOrderByRelevanceInput | $Types.Skip
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    title?: string | $Types.Skip
    AND?: SkillWhereInput | SkillWhereInput[] | $Types.Skip
    OR?: SkillWhereInput[] | $Types.Skip
    NOT?: SkillWhereInput | SkillWhereInput[] | $Types.Skip
    category?: EnumSkillsFilter<"Skill"> | $Enums.Skills | $Types.Skip
    created_at?: DateTimeFilter<"Skill"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Skill"> | Date | string | $Types.Skip
    Member_skill?: Member_skillListRelationFilter | $Types.Skip
  }, "id" | "title">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: SkillCountOrderByAggregateInput | $Types.Skip
    _avg?: SkillAvgOrderByAggregateInput | $Types.Skip
    _max?: SkillMaxOrderByAggregateInput | $Types.Skip
    _min?: SkillMinOrderByAggregateInput | $Types.Skip
    _sum?: SkillSumOrderByAggregateInput | $Types.Skip
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: SkillScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Skill"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Skill"> | string | $Types.Skip
    category?: EnumSkillsWithAggregatesFilter<"Skill"> | $Enums.Skills | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Skill"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Skill"> | Date | string | $Types.Skip
  }

  export type Mad_skillWhereInput = {
    AND?: Mad_skillWhereInput | Mad_skillWhereInput[] | $Types.Skip
    OR?: Mad_skillWhereInput[] | $Types.Skip
    NOT?: Mad_skillWhereInput | Mad_skillWhereInput[] | $Types.Skip
    id?: IntFilter<"Mad_skill"> | number | $Types.Skip
    title?: StringFilter<"Mad_skill"> | string | $Types.Skip
    category?: EnumMadSkillsFilter<"Mad_skill"> | $Enums.MadSkills | $Types.Skip
    member_id?: IntFilter<"Mad_skill"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Mad_skill"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Mad_skill"> | Date | string | $Types.Skip
  }

  export type Mad_skillOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _relevance?: Mad_skillOrderByRelevanceInput | $Types.Skip
  }

  export type Mad_skillWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    uniqueSkills?: Mad_skillUniqueSkillsCompoundUniqueInput | $Types.Skip
    AND?: Mad_skillWhereInput | Mad_skillWhereInput[] | $Types.Skip
    OR?: Mad_skillWhereInput[] | $Types.Skip
    NOT?: Mad_skillWhereInput | Mad_skillWhereInput[] | $Types.Skip
    title?: StringFilter<"Mad_skill"> | string | $Types.Skip
    category?: EnumMadSkillsFilter<"Mad_skill"> | $Enums.MadSkills | $Types.Skip
    member_id?: IntFilter<"Mad_skill"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Mad_skill"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Mad_skill"> | Date | string | $Types.Skip
  }, "id" | "uniqueSkills">

  export type Mad_skillOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: Mad_skillCountOrderByAggregateInput | $Types.Skip
    _avg?: Mad_skillAvgOrderByAggregateInput | $Types.Skip
    _max?: Mad_skillMaxOrderByAggregateInput | $Types.Skip
    _min?: Mad_skillMinOrderByAggregateInput | $Types.Skip
    _sum?: Mad_skillSumOrderByAggregateInput | $Types.Skip
  }

  export type Mad_skillScalarWhereWithAggregatesInput = {
    AND?: Mad_skillScalarWhereWithAggregatesInput | Mad_skillScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: Mad_skillScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: Mad_skillScalarWhereWithAggregatesInput | Mad_skillScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Mad_skill"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Mad_skill"> | string | $Types.Skip
    category?: EnumMadSkillsWithAggregatesFilter<"Mad_skill"> | $Enums.MadSkills | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Mad_skill"> | number | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Mad_skill"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Mad_skill"> | Date | string | $Types.Skip
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[] | $Types.Skip
    OR?: ActivityWhereInput[] | $Types.Skip
    NOT?: ActivityWhereInput | ActivityWhereInput[] | $Types.Skip
    id?: IntFilter<"Activity"> | number | $Types.Skip
    title?: StringFilter<"Activity"> | string | $Types.Skip
    description?: StringNullableFilter<"Activity"> | string | null | $Types.Skip
    start_date?: DateTimeFilter<"Activity"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableFilter<"Activity"> | Date | string | null | $Types.Skip
    location?: StringFilter<"Activity"> | string | $Types.Skip
    member_id?: IntFilter<"Activity"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Activity"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Activity"> | Date | string | $Types.Skip
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrderInput | SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _relevance?: ActivityOrderByRelevanceInput | $Types.Skip
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: ActivityWhereInput | ActivityWhereInput[] | $Types.Skip
    OR?: ActivityWhereInput[] | $Types.Skip
    NOT?: ActivityWhereInput | ActivityWhereInput[] | $Types.Skip
    title?: StringFilter<"Activity"> | string | $Types.Skip
    description?: StringNullableFilter<"Activity"> | string | null | $Types.Skip
    start_date?: DateTimeFilter<"Activity"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableFilter<"Activity"> | Date | string | null | $Types.Skip
    location?: StringFilter<"Activity"> | string | $Types.Skip
    member_id?: IntFilter<"Activity"> | number | $Types.Skip
    created_at?: DateTimeFilter<"Activity"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Activity"> | Date | string | $Types.Skip
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrderInput | SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: ActivityCountOrderByAggregateInput | $Types.Skip
    _avg?: ActivityAvgOrderByAggregateInput | $Types.Skip
    _max?: ActivityMaxOrderByAggregateInput | $Types.Skip
    _min?: ActivityMinOrderByAggregateInput | $Types.Skip
    _sum?: ActivitySumOrderByAggregateInput | $Types.Skip
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ActivityScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Activity"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Activity"> | string | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null | $Types.Skip
    start_date?: DateTimeWithAggregatesFilter<"Activity"> | Date | string | $Types.Skip
    end_date?: DateTimeNullableWithAggregatesFilter<"Activity"> | Date | string | null | $Types.Skip
    location?: StringWithAggregatesFilter<"Activity"> | string | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Activity"> | number | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Activity"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Activity"> | Date | string | $Types.Skip
  }

  export type LangueWhereInput = {
    AND?: LangueWhereInput | LangueWhereInput[] | $Types.Skip
    OR?: LangueWhereInput[] | $Types.Skip
    NOT?: LangueWhereInput | LangueWhereInput[] | $Types.Skip
    id?: IntFilter<"Langue"> | number | $Types.Skip
    title?: StringFilter<"Langue"> | string | $Types.Skip
    created_at?: DateTimeFilter<"Langue"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Langue"> | Date | string | $Types.Skip
    Member_langue?: Member_langueListRelationFilter | $Types.Skip
  }

  export type LangueOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    Member_langue?: Member_langueOrderByRelationAggregateInput | $Types.Skip
    _relevance?: LangueOrderByRelevanceInput | $Types.Skip
  }

  export type LangueWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    title?: string | $Types.Skip
    AND?: LangueWhereInput | LangueWhereInput[] | $Types.Skip
    OR?: LangueWhereInput[] | $Types.Skip
    NOT?: LangueWhereInput | LangueWhereInput[] | $Types.Skip
    created_at?: DateTimeFilter<"Langue"> | Date | string | $Types.Skip
    updated_at?: DateTimeFilter<"Langue"> | Date | string | $Types.Skip
    Member_langue?: Member_langueListRelationFilter | $Types.Skip
  }, "id" | "title">

  export type LangueOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
    _count?: LangueCountOrderByAggregateInput | $Types.Skip
    _avg?: LangueAvgOrderByAggregateInput | $Types.Skip
    _max?: LangueMaxOrderByAggregateInput | $Types.Skip
    _min?: LangueMinOrderByAggregateInput | $Types.Skip
    _sum?: LangueSumOrderByAggregateInput | $Types.Skip
  }

  export type LangueScalarWhereWithAggregatesInput = {
    AND?: LangueScalarWhereWithAggregatesInput | LangueScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: LangueScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: LangueScalarWhereWithAggregatesInput | LangueScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Langue"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Langue"> | string | $Types.Skip
    created_at?: DateTimeWithAggregatesFilter<"Langue"> | Date | string | $Types.Skip
    updated_at?: DateTimeWithAggregatesFilter<"Langue"> | Date | string | $Types.Skip
  }

  export type Member_skillWhereInput = {
    AND?: Member_skillWhereInput | Member_skillWhereInput[] | $Types.Skip
    OR?: Member_skillWhereInput[] | $Types.Skip
    NOT?: Member_skillWhereInput | Member_skillWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Member_skill"> | number | $Types.Skip
    skill_id?: IntFilter<"Member_skill"> | number | $Types.Skip
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput> | $Types.Skip
  }

  export type Member_skillOrderByWithRelationInput = {
    member_id?: SortOrder | $Types.Skip
    skill_id?: SortOrder | $Types.Skip
    skill?: SkillOrderByWithRelationInput | $Types.Skip
  }

  export type Member_skillWhereUniqueInput = Prisma.AtLeast<{
    member_id_skill_id?: Member_skillMember_idSkill_idCompoundUniqueInput | $Types.Skip
    AND?: Member_skillWhereInput | Member_skillWhereInput[] | $Types.Skip
    OR?: Member_skillWhereInput[] | $Types.Skip
    NOT?: Member_skillWhereInput | Member_skillWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Member_skill"> | number | $Types.Skip
    skill_id?: IntFilter<"Member_skill"> | number | $Types.Skip
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput> | $Types.Skip
  }, "member_id_skill_id">

  export type Member_skillOrderByWithAggregationInput = {
    member_id?: SortOrder | $Types.Skip
    skill_id?: SortOrder | $Types.Skip
    _count?: Member_skillCountOrderByAggregateInput | $Types.Skip
    _avg?: Member_skillAvgOrderByAggregateInput | $Types.Skip
    _max?: Member_skillMaxOrderByAggregateInput | $Types.Skip
    _min?: Member_skillMinOrderByAggregateInput | $Types.Skip
    _sum?: Member_skillSumOrderByAggregateInput | $Types.Skip
  }

  export type Member_skillScalarWhereWithAggregatesInput = {
    AND?: Member_skillScalarWhereWithAggregatesInput | Member_skillScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: Member_skillScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: Member_skillScalarWhereWithAggregatesInput | Member_skillScalarWhereWithAggregatesInput[] | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Member_skill"> | number | $Types.Skip
    skill_id?: IntWithAggregatesFilter<"Member_skill"> | number | $Types.Skip
  }

  export type Member_langueWhereInput = {
    AND?: Member_langueWhereInput | Member_langueWhereInput[] | $Types.Skip
    OR?: Member_langueWhereInput[] | $Types.Skip
    NOT?: Member_langueWhereInput | Member_langueWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Member_langue"> | number | $Types.Skip
    langue_id?: IntFilter<"Member_langue"> | number | $Types.Skip
    level?: StringNullableFilter<"Member_langue"> | string | null | $Types.Skip
    langue?: XOR<LangueScalarRelationFilter, LangueWhereInput> | $Types.Skip
  }

  export type Member_langueOrderByWithRelationInput = {
    member_id?: SortOrder | $Types.Skip
    langue_id?: SortOrder | $Types.Skip
    level?: SortOrderInput | SortOrder | $Types.Skip
    langue?: LangueOrderByWithRelationInput | $Types.Skip
    _relevance?: Member_langueOrderByRelevanceInput | $Types.Skip
  }

  export type Member_langueWhereUniqueInput = Prisma.AtLeast<{
    member_id_langue_id?: Member_langueMember_idLangue_idCompoundUniqueInput | $Types.Skip
    AND?: Member_langueWhereInput | Member_langueWhereInput[] | $Types.Skip
    OR?: Member_langueWhereInput[] | $Types.Skip
    NOT?: Member_langueWhereInput | Member_langueWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Member_langue"> | number | $Types.Skip
    langue_id?: IntFilter<"Member_langue"> | number | $Types.Skip
    level?: StringNullableFilter<"Member_langue"> | string | null | $Types.Skip
    langue?: XOR<LangueScalarRelationFilter, LangueWhereInput> | $Types.Skip
  }, "member_id_langue_id">

  export type Member_langueOrderByWithAggregationInput = {
    member_id?: SortOrder | $Types.Skip
    langue_id?: SortOrder | $Types.Skip
    level?: SortOrderInput | SortOrder | $Types.Skip
    _count?: Member_langueCountOrderByAggregateInput | $Types.Skip
    _avg?: Member_langueAvgOrderByAggregateInput | $Types.Skip
    _max?: Member_langueMaxOrderByAggregateInput | $Types.Skip
    _min?: Member_langueMinOrderByAggregateInput | $Types.Skip
    _sum?: Member_langueSumOrderByAggregateInput | $Types.Skip
  }

  export type Member_langueScalarWhereWithAggregatesInput = {
    AND?: Member_langueScalarWhereWithAggregatesInput | Member_langueScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: Member_langueScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: Member_langueScalarWhereWithAggregatesInput | Member_langueScalarWhereWithAggregatesInput[] | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Member_langue"> | number | $Types.Skip
    langue_id?: IntWithAggregatesFilter<"Member_langue"> | number | $Types.Skip
    level?: StringNullableWithAggregatesFilter<"Member_langue"> | string | null | $Types.Skip
  }

  export type Member_offerWhereInput = {
    AND?: Member_offerWhereInput | Member_offerWhereInput[] | $Types.Skip
    OR?: Member_offerWhereInput[] | $Types.Skip
    NOT?: Member_offerWhereInput | Member_offerWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Member_offer"> | number | $Types.Skip
    offer_id?: IntFilter<"Member_offer"> | number | $Types.Skip
    job_offer?: XOR<Job_offerScalarRelationFilter, Job_offerWhereInput> | $Types.Skip
  }

  export type Member_offerOrderByWithRelationInput = {
    member_id?: SortOrder | $Types.Skip
    offer_id?: SortOrder | $Types.Skip
    job_offer?: Job_offerOrderByWithRelationInput | $Types.Skip
  }

  export type Member_offerWhereUniqueInput = Prisma.AtLeast<{
    member_id_offer_id?: Member_offerMember_idOffer_idCompoundUniqueInput | $Types.Skip
    AND?: Member_offerWhereInput | Member_offerWhereInput[] | $Types.Skip
    OR?: Member_offerWhereInput[] | $Types.Skip
    NOT?: Member_offerWhereInput | Member_offerWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Member_offer"> | number | $Types.Skip
    offer_id?: IntFilter<"Member_offer"> | number | $Types.Skip
    job_offer?: XOR<Job_offerScalarRelationFilter, Job_offerWhereInput> | $Types.Skip
  }, "member_id_offer_id">

  export type Member_offerOrderByWithAggregationInput = {
    member_id?: SortOrder | $Types.Skip
    offer_id?: SortOrder | $Types.Skip
    _count?: Member_offerCountOrderByAggregateInput | $Types.Skip
    _avg?: Member_offerAvgOrderByAggregateInput | $Types.Skip
    _max?: Member_offerMaxOrderByAggregateInput | $Types.Skip
    _min?: Member_offerMinOrderByAggregateInput | $Types.Skip
    _sum?: Member_offerSumOrderByAggregateInput | $Types.Skip
  }

  export type Member_offerScalarWhereWithAggregatesInput = {
    AND?: Member_offerScalarWhereWithAggregatesInput | Member_offerScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: Member_offerScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: Member_offerScalarWhereWithAggregatesInput | Member_offerScalarWhereWithAggregatesInput[] | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Member_offer"> | number | $Types.Skip
    offer_id?: IntWithAggregatesFilter<"Member_offer"> | number | $Types.Skip
  }

  export type CandidacyWhereInput = {
    AND?: CandidacyWhereInput | CandidacyWhereInput[] | $Types.Skip
    OR?: CandidacyWhereInput[] | $Types.Skip
    NOT?: CandidacyWhereInput | CandidacyWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Candidacy"> | number | $Types.Skip
    cv_id?: StringFilter<"Candidacy"> | string | $Types.Skip
    job_offer_id?: IntFilter<"Candidacy"> | number | $Types.Skip
    remember?: DateTimeNullableFilter<"Candidacy"> | Date | string | null | $Types.Skip
    status?: EnumStatusNullableFilter<"Candidacy"> | $Enums.Status | null | $Types.Skip
    description?: StringNullableFilter<"Candidacy"> | string | null | $Types.Skip
    job_offer?: XOR<Job_offerScalarRelationFilter, Job_offerWhereInput> | $Types.Skip
  }

  export type CandidacyOrderByWithRelationInput = {
    member_id?: SortOrder | $Types.Skip
    cv_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
    remember?: SortOrderInput | SortOrder | $Types.Skip
    status?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    job_offer?: Job_offerOrderByWithRelationInput | $Types.Skip
    _relevance?: CandidacyOrderByRelevanceInput | $Types.Skip
  }

  export type CandidacyWhereUniqueInput = Prisma.AtLeast<{
    cv_id_job_offer_id?: CandidacyCv_idJob_offer_idCompoundUniqueInput | $Types.Skip
    AND?: CandidacyWhereInput | CandidacyWhereInput[] | $Types.Skip
    OR?: CandidacyWhereInput[] | $Types.Skip
    NOT?: CandidacyWhereInput | CandidacyWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Candidacy"> | number | $Types.Skip
    cv_id?: StringFilter<"Candidacy"> | string | $Types.Skip
    job_offer_id?: IntFilter<"Candidacy"> | number | $Types.Skip
    remember?: DateTimeNullableFilter<"Candidacy"> | Date | string | null | $Types.Skip
    status?: EnumStatusNullableFilter<"Candidacy"> | $Enums.Status | null | $Types.Skip
    description?: StringNullableFilter<"Candidacy"> | string | null | $Types.Skip
    job_offer?: XOR<Job_offerScalarRelationFilter, Job_offerWhereInput> | $Types.Skip
  }, "cv_id_job_offer_id">

  export type CandidacyOrderByWithAggregationInput = {
    member_id?: SortOrder | $Types.Skip
    cv_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
    remember?: SortOrderInput | SortOrder | $Types.Skip
    status?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    _count?: CandidacyCountOrderByAggregateInput | $Types.Skip
    _avg?: CandidacyAvgOrderByAggregateInput | $Types.Skip
    _max?: CandidacyMaxOrderByAggregateInput | $Types.Skip
    _min?: CandidacyMinOrderByAggregateInput | $Types.Skip
    _sum?: CandidacySumOrderByAggregateInput | $Types.Skip
  }

  export type CandidacyScalarWhereWithAggregatesInput = {
    AND?: CandidacyScalarWhereWithAggregatesInput | CandidacyScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CandidacyScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CandidacyScalarWhereWithAggregatesInput | CandidacyScalarWhereWithAggregatesInput[] | $Types.Skip
    member_id?: IntWithAggregatesFilter<"Candidacy"> | number | $Types.Skip
    cv_id?: StringWithAggregatesFilter<"Candidacy"> | string | $Types.Skip
    job_offer_id?: IntWithAggregatesFilter<"Candidacy"> | number | $Types.Skip
    remember?: DateTimeNullableWithAggregatesFilter<"Candidacy"> | Date | string | null | $Types.Skip
    status?: EnumStatusNullableWithAggregatesFilter<"Candidacy"> | $Enums.Status | null | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Candidacy"> | string | null | $Types.Skip
  }

  export type ProfileCreateInput = {
    picture?: string | null | $Types.Skip
    firstname?: string | null | $Types.Skip
    lastname?: string | null | $Types.Skip
    email?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    has_car: boolean
    description?: string | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type ProfileUncheckedCreateInput = {
    id?: number | $Types.Skip
    picture?: string | null | $Types.Skip
    firstname?: string | null | $Types.Skip
    lastname?: string | null | $Types.Skip
    email?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    has_car: boolean
    description?: string | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type ProfileUpdateInput = {
    picture?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    firstname?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastname?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    has_car?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    picture?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    firstname?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastname?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    has_car?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProfileCreateManyInput = {
    id?: number | $Types.Skip
    picture?: string | null | $Types.Skip
    firstname?: string | null | $Types.Skip
    lastname?: string | null | $Types.Skip
    email?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    has_car: boolean
    description?: string | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type ProfileUpdateManyMutationInput = {
    picture?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    firstname?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastname?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    has_car?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    picture?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    firstname?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastname?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    has_car?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Job_offerCreateInput = {
    title: string
    ftid: string
    location?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience_length?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    description: string
    update_ft?: Date | string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Member_offer?: Member_offerCreateNestedManyWithoutJob_offerInput | $Types.Skip
    Candidacy?: CandidacyCreateNestedManyWithoutJob_offerInput | $Types.Skip
  }

  export type Job_offerUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    ftid: string
    location?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience_length?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    description: string
    update_ft?: Date | string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Member_offer?: Member_offerUncheckedCreateNestedManyWithoutJob_offerInput | $Types.Skip
    Candidacy?: CandidacyUncheckedCreateNestedManyWithoutJob_offerInput | $Types.Skip
  }

  export type Job_offerUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ftid?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience_length?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    update_ft?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Member_offer?: Member_offerUpdateManyWithoutJob_offerNestedInput | $Types.Skip
    Candidacy?: CandidacyUpdateManyWithoutJob_offerNestedInput | $Types.Skip
  }

  export type Job_offerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ftid?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience_length?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    update_ft?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Member_offer?: Member_offerUncheckedUpdateManyWithoutJob_offerNestedInput | $Types.Skip
    Candidacy?: CandidacyUncheckedUpdateManyWithoutJob_offerNestedInput | $Types.Skip
  }

  export type Job_offerCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    ftid: string
    location?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience_length?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    description: string
    update_ft?: Date | string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type Job_offerUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ftid?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience_length?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    update_ft?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Job_offerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ftid?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience_length?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    update_ft?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Job_searchCreateInput = {
    title: string
    search_field: string
    city?: string | null | $Types.Skip
    departement?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type Job_searchUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    search_field: string
    city?: string | null | $Types.Skip
    departement?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type Job_searchUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    search_field?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    departement?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Job_searchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    search_field?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    departement?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Job_searchCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    search_field: string
    city?: string | null | $Types.Skip
    departement?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type Job_searchUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    search_field?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    departement?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Job_searchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    search_field?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    departement?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type EventCreateInput = {
    title: string
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    description?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    member_id: number
    job_offer_id?: number | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type EventUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    description?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    member_id: number
    job_offer_id?: number | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    job_offer_id?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    job_offer_id?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type EventCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    description?: string | null | $Types.Skip
    location?: string | null | $Types.Skip
    member_id: number
    job_offer_id?: number | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    job_offer_id?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    job_offer_id?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ExperienceCreateInput = {
    title: string
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    company_name: string
    location: string
    description?: string | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    company_name: string
    location: string
    description?: string | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type ExperienceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    company_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    company_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ExperienceCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    company_name: string
    location: string
    description?: string | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type ExperienceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    company_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    company_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type EducationCreateInput = {
    title: string
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    is_obtained: boolean
    school_name: string
    location: string
    description?: string | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type EducationUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    is_obtained: boolean
    school_name: string
    location: string
    description?: string | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type EducationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    is_obtained?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    school_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type EducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    is_obtained?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    school_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type EducationCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    is_obtained: boolean
    school_name: string
    location: string
    description?: string | null | $Types.Skip
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type EducationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    is_obtained?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    school_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    is_obtained?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    school_name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type SkillCreateInput = {
    title: string
    category: $Enums.Skills
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Member_skill?: Member_skillCreateNestedManyWithoutSkillInput | $Types.Skip
  }

  export type SkillUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    category: $Enums.Skills
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Member_skill?: Member_skillUncheckedCreateNestedManyWithoutSkillInput | $Types.Skip
  }

  export type SkillUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Member_skill?: Member_skillUpdateManyWithoutSkillNestedInput | $Types.Skip
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Member_skill?: Member_skillUncheckedUpdateManyWithoutSkillNestedInput | $Types.Skip
  }

  export type SkillCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    category: $Enums.Skills
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type SkillUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Mad_skillCreateInput = {
    title: string
    category: $Enums.MadSkills
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type Mad_skillUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    category: $Enums.MadSkills
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type Mad_skillUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumMadSkillsFieldUpdateOperationsInput | $Enums.MadSkills | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Mad_skillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumMadSkillsFieldUpdateOperationsInput | $Enums.MadSkills | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Mad_skillCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    category: $Enums.MadSkills
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type Mad_skillUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumMadSkillsFieldUpdateOperationsInput | $Enums.MadSkills | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Mad_skillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumMadSkillsFieldUpdateOperationsInput | $Enums.MadSkills | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ActivityCreateInput = {
    title: string
    description?: string | null | $Types.Skip
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    location: string
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type ActivityUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    description?: string | null | $Types.Skip
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    location: string
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type ActivityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ActivityCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    description?: string | null | $Types.Skip
    start_date: Date | string
    end_date?: Date | string | null | $Types.Skip
    location: string
    member_id: number
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type ActivityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type LangueCreateInput = {
    title: string
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Member_langue?: Member_langueCreateNestedManyWithoutLangueInput | $Types.Skip
  }

  export type LangueUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Member_langue?: Member_langueUncheckedCreateNestedManyWithoutLangueInput | $Types.Skip
  }

  export type LangueUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Member_langue?: Member_langueUpdateManyWithoutLangueNestedInput | $Types.Skip
  }

  export type LangueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Member_langue?: Member_langueUncheckedUpdateManyWithoutLangueNestedInput | $Types.Skip
  }

  export type LangueCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type LangueUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type LangueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Member_skillCreateInput = {
    member_id: number
    skill: SkillCreateNestedOneWithoutMember_skillInput
  }

  export type Member_skillUncheckedCreateInput = {
    member_id: number
    skill_id: number
  }

  export type Member_skillUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    skill?: SkillUpdateOneRequiredWithoutMember_skillNestedInput | $Types.Skip
  }

  export type Member_skillUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    skill_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_skillCreateManyInput = {
    member_id: number
    skill_id: number
  }

  export type Member_skillUpdateManyMutationInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_skillUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    skill_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_langueCreateInput = {
    member_id: number
    level?: string | null | $Types.Skip
    langue: LangueCreateNestedOneWithoutMember_langueInput
  }

  export type Member_langueUncheckedCreateInput = {
    member_id: number
    langue_id: number
    level?: string | null | $Types.Skip
  }

  export type Member_langueUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    level?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    langue?: LangueUpdateOneRequiredWithoutMember_langueNestedInput | $Types.Skip
  }

  export type Member_langueUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    langue_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    level?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type Member_langueCreateManyInput = {
    member_id: number
    langue_id: number
    level?: string | null | $Types.Skip
  }

  export type Member_langueUpdateManyMutationInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    level?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type Member_langueUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    langue_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    level?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type Member_offerCreateInput = {
    member_id: number
    job_offer: Job_offerCreateNestedOneWithoutMember_offerInput
  }

  export type Member_offerUncheckedCreateInput = {
    member_id: number
    offer_id: number
  }

  export type Member_offerUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    job_offer?: Job_offerUpdateOneRequiredWithoutMember_offerNestedInput | $Types.Skip
  }

  export type Member_offerUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    offer_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_offerCreateManyInput = {
    member_id: number
    offer_id: number
  }

  export type Member_offerUpdateManyMutationInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_offerUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    offer_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CandidacyCreateInput = {
    member_id: number
    cv_id: string
    remember?: Date | string | null | $Types.Skip
    status?: $Enums.Status | null | $Types.Skip
    description?: string | null | $Types.Skip
    job_offer: Job_offerCreateNestedOneWithoutCandidacyInput
  }

  export type CandidacyUncheckedCreateInput = {
    member_id: number
    cv_id: string
    job_offer_id: number
    remember?: Date | string | null | $Types.Skip
    status?: $Enums.Status | null | $Types.Skip
    description?: string | null | $Types.Skip
  }

  export type CandidacyUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cv_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    remember?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    job_offer?: Job_offerUpdateOneRequiredWithoutCandidacyNestedInput | $Types.Skip
  }

  export type CandidacyUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cv_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    job_offer_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    remember?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type CandidacyCreateManyInput = {
    member_id: number
    cv_id: string
    job_offer_id: number
    remember?: Date | string | null | $Types.Skip
    status?: $Enums.Status | null | $Types.Skip
    description?: string | null | $Types.Skip
  }

  export type CandidacyUpdateManyMutationInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cv_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    remember?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type CandidacyUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cv_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    job_offer_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    remember?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type ProfileOrderByRelevanceInput = {
    fields: ProfileOrderByRelevanceFieldEnum | ProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    picture?: SortOrder | $Types.Skip
    firstname?: SortOrder | $Types.Skip
    lastname?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    has_car?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    picture?: SortOrder | $Types.Skip
    firstname?: SortOrder | $Types.Skip
    lastname?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    has_car?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    picture?: SortOrder | $Types.Skip
    firstname?: SortOrder | $Types.Skip
    lastname?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    has_car?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null | $Types.Skip
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null | $Types.Skip
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | null | $Types.Skip
    notIn?: Date[] | string[] | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null | $Types.Skip
  }

  export type Member_offerListRelationFilter = {
    every?: Member_offerWhereInput | $Types.Skip
    some?: Member_offerWhereInput | $Types.Skip
    none?: Member_offerWhereInput | $Types.Skip
  }

  export type CandidacyListRelationFilter = {
    every?: CandidacyWhereInput | $Types.Skip
    some?: CandidacyWhereInput | $Types.Skip
    none?: CandidacyWhereInput | $Types.Skip
  }

  export type Member_offerOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type CandidacyOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type Job_offerOrderByRelevanceInput = {
    fields: Job_offerOrderByRelevanceFieldEnum | Job_offerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Job_offerCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    ftid?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    contract_type?: SortOrder | $Types.Skip
    experience_length?: SortOrder | $Types.Skip
    professional_field?: SortOrder | $Types.Skip
    work_time?: SortOrder | $Types.Skip
    salary?: SortOrder | $Types.Skip
    handy_friendly?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    update_ft?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type Job_offerAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type Job_offerMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    ftid?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    contract_type?: SortOrder | $Types.Skip
    experience_length?: SortOrder | $Types.Skip
    professional_field?: SortOrder | $Types.Skip
    work_time?: SortOrder | $Types.Skip
    salary?: SortOrder | $Types.Skip
    handy_friendly?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    update_ft?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type Job_offerMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    ftid?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    contract_type?: SortOrder | $Types.Skip
    experience_length?: SortOrder | $Types.Skip
    professional_field?: SortOrder | $Types.Skip
    work_time?: SortOrder | $Types.Skip
    salary?: SortOrder | $Types.Skip
    handy_friendly?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    update_ft?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type Job_offerSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null | $Types.Skip
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | null | $Types.Skip
    notIn?: Date[] | string[] | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type Job_searchOrderByRelevanceInput = {
    fields: Job_searchOrderByRelevanceFieldEnum | Job_searchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Job_searchCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    search_field?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    departement?: SortOrder | $Types.Skip
    contract_type?: SortOrder | $Types.Skip
    experience?: SortOrder | $Types.Skip
    professional_field?: SortOrder | $Types.Skip
    work_time?: SortOrder | $Types.Skip
    salary?: SortOrder | $Types.Skip
    handy_friendly?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type Job_searchAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type Job_searchMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    search_field?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    departement?: SortOrder | $Types.Skip
    contract_type?: SortOrder | $Types.Skip
    experience?: SortOrder | $Types.Skip
    professional_field?: SortOrder | $Types.Skip
    work_time?: SortOrder | $Types.Skip
    salary?: SortOrder | $Types.Skip
    handy_friendly?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type Job_searchMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    search_field?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    departement?: SortOrder | $Types.Skip
    contract_type?: SortOrder | $Types.Skip
    experience?: SortOrder | $Types.Skip
    professional_field?: SortOrder | $Types.Skip
    work_time?: SortOrder | $Types.Skip
    salary?: SortOrder | $Types.Skip
    handy_friendly?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type Job_searchSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type ExperienceOrderByRelevanceInput = {
    fields: ExperienceOrderByRelevanceFieldEnum | ExperienceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    company_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    company_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    company_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type EducationOrderByRelevanceInput = {
    fields: EducationOrderByRelevanceFieldEnum | EducationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    is_obtained?: SortOrder | $Types.Skip
    school_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type EducationAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    is_obtained?: SortOrder | $Types.Skip
    school_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    is_obtained?: SortOrder | $Types.Skip
    school_name?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type EducationSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type EnumSkillsFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Skills[] | $Types.Skip
    notIn?: $Enums.Skills[] | $Types.Skip
    not?: NestedEnumSkillsFilter<$PrismaModel> | $Enums.Skills | $Types.Skip
  }

  export type Member_skillListRelationFilter = {
    every?: Member_skillWhereInput | $Types.Skip
    some?: Member_skillWhereInput | $Types.Skip
    none?: Member_skillWhereInput | $Types.Skip
  }

  export type Member_skillOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type SkillOrderByRelevanceInput = {
    fields: SkillOrderByRelevanceFieldEnum | SkillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type EnumSkillsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Skills[] | $Types.Skip
    notIn?: $Enums.Skills[] | $Types.Skip
    not?: NestedEnumSkillsWithAggregatesFilter<$PrismaModel> | $Enums.Skills | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumSkillsFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumSkillsFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumMadSkillsFilter<$PrismaModel = never> = {
    equals?: $Enums.MadSkills | EnumMadSkillsFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.MadSkills[] | $Types.Skip
    notIn?: $Enums.MadSkills[] | $Types.Skip
    not?: NestedEnumMadSkillsFilter<$PrismaModel> | $Enums.MadSkills | $Types.Skip
  }

  export type Mad_skillOrderByRelevanceInput = {
    fields: Mad_skillOrderByRelevanceFieldEnum | Mad_skillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Mad_skillUniqueSkillsCompoundUniqueInput = {
    member_id: number
    title: string
    category: $Enums.MadSkills
  }

  export type Mad_skillCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type Mad_skillAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type Mad_skillMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type Mad_skillMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type Mad_skillSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type EnumMadSkillsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MadSkills | EnumMadSkillsFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.MadSkills[] | $Types.Skip
    notIn?: $Enums.MadSkills[] | $Types.Skip
    not?: NestedEnumMadSkillsWithAggregatesFilter<$PrismaModel> | $Enums.MadSkills | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumMadSkillsFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumMadSkillsFilter<$PrismaModel> | $Types.Skip
  }

  export type ActivityOrderByRelevanceInput = {
    fields: ActivityOrderByRelevanceFieldEnum | ActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    start_date?: SortOrder | $Types.Skip
    end_date?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    member_id?: SortOrder | $Types.Skip
  }

  export type Member_langueListRelationFilter = {
    every?: Member_langueWhereInput | $Types.Skip
    some?: Member_langueWhereInput | $Types.Skip
    none?: Member_langueWhereInput | $Types.Skip
  }

  export type Member_langueOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type LangueOrderByRelevanceInput = {
    fields: LangueOrderByRelevanceFieldEnum | LangueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LangueCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type LangueAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type LangueMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type LangueMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    created_at?: SortOrder | $Types.Skip
    updated_at?: SortOrder | $Types.Skip
  }

  export type LangueSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput | $Types.Skip
    isNot?: SkillWhereInput | $Types.Skip
  }

  export type Member_skillMember_idSkill_idCompoundUniqueInput = {
    member_id: number
    skill_id: number
  }

  export type Member_skillCountOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    skill_id?: SortOrder | $Types.Skip
  }

  export type Member_skillAvgOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    skill_id?: SortOrder | $Types.Skip
  }

  export type Member_skillMaxOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    skill_id?: SortOrder | $Types.Skip
  }

  export type Member_skillMinOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    skill_id?: SortOrder | $Types.Skip
  }

  export type Member_skillSumOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    skill_id?: SortOrder | $Types.Skip
  }

  export type LangueScalarRelationFilter = {
    is?: LangueWhereInput | $Types.Skip
    isNot?: LangueWhereInput | $Types.Skip
  }

  export type Member_langueOrderByRelevanceInput = {
    fields: Member_langueOrderByRelevanceFieldEnum | Member_langueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Member_langueMember_idLangue_idCompoundUniqueInput = {
    member_id: number
    langue_id: number
  }

  export type Member_langueCountOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    langue_id?: SortOrder | $Types.Skip
    level?: SortOrder | $Types.Skip
  }

  export type Member_langueAvgOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    langue_id?: SortOrder | $Types.Skip
  }

  export type Member_langueMaxOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    langue_id?: SortOrder | $Types.Skip
    level?: SortOrder | $Types.Skip
  }

  export type Member_langueMinOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    langue_id?: SortOrder | $Types.Skip
    level?: SortOrder | $Types.Skip
  }

  export type Member_langueSumOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    langue_id?: SortOrder | $Types.Skip
  }

  export type Job_offerScalarRelationFilter = {
    is?: Job_offerWhereInput | $Types.Skip
    isNot?: Job_offerWhereInput | $Types.Skip
  }

  export type Member_offerMember_idOffer_idCompoundUniqueInput = {
    member_id: number
    offer_id: number
  }

  export type Member_offerCountOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    offer_id?: SortOrder | $Types.Skip
  }

  export type Member_offerAvgOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    offer_id?: SortOrder | $Types.Skip
  }

  export type Member_offerMaxOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    offer_id?: SortOrder | $Types.Skip
  }

  export type Member_offerMinOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    offer_id?: SortOrder | $Types.Skip
  }

  export type Member_offerSumOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    offer_id?: SortOrder | $Types.Skip
  }

  export type EnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: $Enums.Status[] | null | $Types.Skip
    notIn?: $Enums.Status[] | null | $Types.Skip
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null | $Types.Skip
  }

  export type CandidacyOrderByRelevanceInput = {
    fields: CandidacyOrderByRelevanceFieldEnum | CandidacyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CandidacyCv_idJob_offer_idCompoundUniqueInput = {
    cv_id: string
    job_offer_id: number
  }

  export type CandidacyCountOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    cv_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
    remember?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
  }

  export type CandidacyAvgOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
  }

  export type CandidacyMaxOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    cv_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
    remember?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
  }

  export type CandidacyMinOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    cv_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
    remember?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
  }

  export type CandidacySumOrderByAggregateInput = {
    member_id?: SortOrder | $Types.Skip
    job_offer_id?: SortOrder | $Types.Skip
  }

  export type EnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: $Enums.Status[] | null | $Types.Skip
    notIn?: $Enums.Status[] | null | $Types.Skip
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumStatusNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumStatusNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean | $Types.Skip
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string | $Types.Skip
  }

  export type Member_offerCreateNestedManyWithoutJob_offerInput = {
    create?: XOR<Member_offerCreateWithoutJob_offerInput, Member_offerUncheckedCreateWithoutJob_offerInput> | Member_offerCreateWithoutJob_offerInput[] | Member_offerUncheckedCreateWithoutJob_offerInput[] | $Types.Skip
    connectOrCreate?: Member_offerCreateOrConnectWithoutJob_offerInput | Member_offerCreateOrConnectWithoutJob_offerInput[] | $Types.Skip
    createMany?: Member_offerCreateManyJob_offerInputEnvelope | $Types.Skip
    connect?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
  }

  export type CandidacyCreateNestedManyWithoutJob_offerInput = {
    create?: XOR<CandidacyCreateWithoutJob_offerInput, CandidacyUncheckedCreateWithoutJob_offerInput> | CandidacyCreateWithoutJob_offerInput[] | CandidacyUncheckedCreateWithoutJob_offerInput[] | $Types.Skip
    connectOrCreate?: CandidacyCreateOrConnectWithoutJob_offerInput | CandidacyCreateOrConnectWithoutJob_offerInput[] | $Types.Skip
    createMany?: CandidacyCreateManyJob_offerInputEnvelope | $Types.Skip
    connect?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
  }

  export type Member_offerUncheckedCreateNestedManyWithoutJob_offerInput = {
    create?: XOR<Member_offerCreateWithoutJob_offerInput, Member_offerUncheckedCreateWithoutJob_offerInput> | Member_offerCreateWithoutJob_offerInput[] | Member_offerUncheckedCreateWithoutJob_offerInput[] | $Types.Skip
    connectOrCreate?: Member_offerCreateOrConnectWithoutJob_offerInput | Member_offerCreateOrConnectWithoutJob_offerInput[] | $Types.Skip
    createMany?: Member_offerCreateManyJob_offerInputEnvelope | $Types.Skip
    connect?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
  }

  export type CandidacyUncheckedCreateNestedManyWithoutJob_offerInput = {
    create?: XOR<CandidacyCreateWithoutJob_offerInput, CandidacyUncheckedCreateWithoutJob_offerInput> | CandidacyCreateWithoutJob_offerInput[] | CandidacyUncheckedCreateWithoutJob_offerInput[] | $Types.Skip
    connectOrCreate?: CandidacyCreateOrConnectWithoutJob_offerInput | CandidacyCreateOrConnectWithoutJob_offerInput[] | $Types.Skip
    createMany?: CandidacyCreateManyJob_offerInputEnvelope | $Types.Skip
    connect?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null | $Types.Skip
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null | $Types.Skip
  }

  export type Member_offerUpdateManyWithoutJob_offerNestedInput = {
    create?: XOR<Member_offerCreateWithoutJob_offerInput, Member_offerUncheckedCreateWithoutJob_offerInput> | Member_offerCreateWithoutJob_offerInput[] | Member_offerUncheckedCreateWithoutJob_offerInput[] | $Types.Skip
    connectOrCreate?: Member_offerCreateOrConnectWithoutJob_offerInput | Member_offerCreateOrConnectWithoutJob_offerInput[] | $Types.Skip
    upsert?: Member_offerUpsertWithWhereUniqueWithoutJob_offerInput | Member_offerUpsertWithWhereUniqueWithoutJob_offerInput[] | $Types.Skip
    createMany?: Member_offerCreateManyJob_offerInputEnvelope | $Types.Skip
    set?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
    disconnect?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
    delete?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
    connect?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
    update?: Member_offerUpdateWithWhereUniqueWithoutJob_offerInput | Member_offerUpdateWithWhereUniqueWithoutJob_offerInput[] | $Types.Skip
    updateMany?: Member_offerUpdateManyWithWhereWithoutJob_offerInput | Member_offerUpdateManyWithWhereWithoutJob_offerInput[] | $Types.Skip
    deleteMany?: Member_offerScalarWhereInput | Member_offerScalarWhereInput[] | $Types.Skip
  }

  export type CandidacyUpdateManyWithoutJob_offerNestedInput = {
    create?: XOR<CandidacyCreateWithoutJob_offerInput, CandidacyUncheckedCreateWithoutJob_offerInput> | CandidacyCreateWithoutJob_offerInput[] | CandidacyUncheckedCreateWithoutJob_offerInput[] | $Types.Skip
    connectOrCreate?: CandidacyCreateOrConnectWithoutJob_offerInput | CandidacyCreateOrConnectWithoutJob_offerInput[] | $Types.Skip
    upsert?: CandidacyUpsertWithWhereUniqueWithoutJob_offerInput | CandidacyUpsertWithWhereUniqueWithoutJob_offerInput[] | $Types.Skip
    createMany?: CandidacyCreateManyJob_offerInputEnvelope | $Types.Skip
    set?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
    disconnect?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
    delete?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
    connect?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
    update?: CandidacyUpdateWithWhereUniqueWithoutJob_offerInput | CandidacyUpdateWithWhereUniqueWithoutJob_offerInput[] | $Types.Skip
    updateMany?: CandidacyUpdateManyWithWhereWithoutJob_offerInput | CandidacyUpdateManyWithWhereWithoutJob_offerInput[] | $Types.Skip
    deleteMany?: CandidacyScalarWhereInput | CandidacyScalarWhereInput[] | $Types.Skip
  }

  export type Member_offerUncheckedUpdateManyWithoutJob_offerNestedInput = {
    create?: XOR<Member_offerCreateWithoutJob_offerInput, Member_offerUncheckedCreateWithoutJob_offerInput> | Member_offerCreateWithoutJob_offerInput[] | Member_offerUncheckedCreateWithoutJob_offerInput[] | $Types.Skip
    connectOrCreate?: Member_offerCreateOrConnectWithoutJob_offerInput | Member_offerCreateOrConnectWithoutJob_offerInput[] | $Types.Skip
    upsert?: Member_offerUpsertWithWhereUniqueWithoutJob_offerInput | Member_offerUpsertWithWhereUniqueWithoutJob_offerInput[] | $Types.Skip
    createMany?: Member_offerCreateManyJob_offerInputEnvelope | $Types.Skip
    set?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
    disconnect?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
    delete?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
    connect?: Member_offerWhereUniqueInput | Member_offerWhereUniqueInput[] | $Types.Skip
    update?: Member_offerUpdateWithWhereUniqueWithoutJob_offerInput | Member_offerUpdateWithWhereUniqueWithoutJob_offerInput[] | $Types.Skip
    updateMany?: Member_offerUpdateManyWithWhereWithoutJob_offerInput | Member_offerUpdateManyWithWhereWithoutJob_offerInput[] | $Types.Skip
    deleteMany?: Member_offerScalarWhereInput | Member_offerScalarWhereInput[] | $Types.Skip
  }

  export type CandidacyUncheckedUpdateManyWithoutJob_offerNestedInput = {
    create?: XOR<CandidacyCreateWithoutJob_offerInput, CandidacyUncheckedCreateWithoutJob_offerInput> | CandidacyCreateWithoutJob_offerInput[] | CandidacyUncheckedCreateWithoutJob_offerInput[] | $Types.Skip
    connectOrCreate?: CandidacyCreateOrConnectWithoutJob_offerInput | CandidacyCreateOrConnectWithoutJob_offerInput[] | $Types.Skip
    upsert?: CandidacyUpsertWithWhereUniqueWithoutJob_offerInput | CandidacyUpsertWithWhereUniqueWithoutJob_offerInput[] | $Types.Skip
    createMany?: CandidacyCreateManyJob_offerInputEnvelope | $Types.Skip
    set?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
    disconnect?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
    delete?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
    connect?: CandidacyWhereUniqueInput | CandidacyWhereUniqueInput[] | $Types.Skip
    update?: CandidacyUpdateWithWhereUniqueWithoutJob_offerInput | CandidacyUpdateWithWhereUniqueWithoutJob_offerInput[] | $Types.Skip
    updateMany?: CandidacyUpdateManyWithWhereWithoutJob_offerInput | CandidacyUpdateManyWithWhereWithoutJob_offerInput[] | $Types.Skip
    deleteMany?: CandidacyScalarWhereInput | CandidacyScalarWhereInput[] | $Types.Skip
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type Member_skillCreateNestedManyWithoutSkillInput = {
    create?: XOR<Member_skillCreateWithoutSkillInput, Member_skillUncheckedCreateWithoutSkillInput> | Member_skillCreateWithoutSkillInput[] | Member_skillUncheckedCreateWithoutSkillInput[] | $Types.Skip
    connectOrCreate?: Member_skillCreateOrConnectWithoutSkillInput | Member_skillCreateOrConnectWithoutSkillInput[] | $Types.Skip
    createMany?: Member_skillCreateManySkillInputEnvelope | $Types.Skip
    connect?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
  }

  export type Member_skillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<Member_skillCreateWithoutSkillInput, Member_skillUncheckedCreateWithoutSkillInput> | Member_skillCreateWithoutSkillInput[] | Member_skillUncheckedCreateWithoutSkillInput[] | $Types.Skip
    connectOrCreate?: Member_skillCreateOrConnectWithoutSkillInput | Member_skillCreateOrConnectWithoutSkillInput[] | $Types.Skip
    createMany?: Member_skillCreateManySkillInputEnvelope | $Types.Skip
    connect?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
  }

  export type EnumSkillsFieldUpdateOperationsInput = {
    set?: $Enums.Skills | $Types.Skip
  }

  export type Member_skillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<Member_skillCreateWithoutSkillInput, Member_skillUncheckedCreateWithoutSkillInput> | Member_skillCreateWithoutSkillInput[] | Member_skillUncheckedCreateWithoutSkillInput[] | $Types.Skip
    connectOrCreate?: Member_skillCreateOrConnectWithoutSkillInput | Member_skillCreateOrConnectWithoutSkillInput[] | $Types.Skip
    upsert?: Member_skillUpsertWithWhereUniqueWithoutSkillInput | Member_skillUpsertWithWhereUniqueWithoutSkillInput[] | $Types.Skip
    createMany?: Member_skillCreateManySkillInputEnvelope | $Types.Skip
    set?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
    disconnect?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
    delete?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
    connect?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
    update?: Member_skillUpdateWithWhereUniqueWithoutSkillInput | Member_skillUpdateWithWhereUniqueWithoutSkillInput[] | $Types.Skip
    updateMany?: Member_skillUpdateManyWithWhereWithoutSkillInput | Member_skillUpdateManyWithWhereWithoutSkillInput[] | $Types.Skip
    deleteMany?: Member_skillScalarWhereInput | Member_skillScalarWhereInput[] | $Types.Skip
  }

  export type Member_skillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<Member_skillCreateWithoutSkillInput, Member_skillUncheckedCreateWithoutSkillInput> | Member_skillCreateWithoutSkillInput[] | Member_skillUncheckedCreateWithoutSkillInput[] | $Types.Skip
    connectOrCreate?: Member_skillCreateOrConnectWithoutSkillInput | Member_skillCreateOrConnectWithoutSkillInput[] | $Types.Skip
    upsert?: Member_skillUpsertWithWhereUniqueWithoutSkillInput | Member_skillUpsertWithWhereUniqueWithoutSkillInput[] | $Types.Skip
    createMany?: Member_skillCreateManySkillInputEnvelope | $Types.Skip
    set?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
    disconnect?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
    delete?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
    connect?: Member_skillWhereUniqueInput | Member_skillWhereUniqueInput[] | $Types.Skip
    update?: Member_skillUpdateWithWhereUniqueWithoutSkillInput | Member_skillUpdateWithWhereUniqueWithoutSkillInput[] | $Types.Skip
    updateMany?: Member_skillUpdateManyWithWhereWithoutSkillInput | Member_skillUpdateManyWithWhereWithoutSkillInput[] | $Types.Skip
    deleteMany?: Member_skillScalarWhereInput | Member_skillScalarWhereInput[] | $Types.Skip
  }

  export type EnumMadSkillsFieldUpdateOperationsInput = {
    set?: $Enums.MadSkills | $Types.Skip
  }

  export type Member_langueCreateNestedManyWithoutLangueInput = {
    create?: XOR<Member_langueCreateWithoutLangueInput, Member_langueUncheckedCreateWithoutLangueInput> | Member_langueCreateWithoutLangueInput[] | Member_langueUncheckedCreateWithoutLangueInput[] | $Types.Skip
    connectOrCreate?: Member_langueCreateOrConnectWithoutLangueInput | Member_langueCreateOrConnectWithoutLangueInput[] | $Types.Skip
    createMany?: Member_langueCreateManyLangueInputEnvelope | $Types.Skip
    connect?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
  }

  export type Member_langueUncheckedCreateNestedManyWithoutLangueInput = {
    create?: XOR<Member_langueCreateWithoutLangueInput, Member_langueUncheckedCreateWithoutLangueInput> | Member_langueCreateWithoutLangueInput[] | Member_langueUncheckedCreateWithoutLangueInput[] | $Types.Skip
    connectOrCreate?: Member_langueCreateOrConnectWithoutLangueInput | Member_langueCreateOrConnectWithoutLangueInput[] | $Types.Skip
    createMany?: Member_langueCreateManyLangueInputEnvelope | $Types.Skip
    connect?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
  }

  export type Member_langueUpdateManyWithoutLangueNestedInput = {
    create?: XOR<Member_langueCreateWithoutLangueInput, Member_langueUncheckedCreateWithoutLangueInput> | Member_langueCreateWithoutLangueInput[] | Member_langueUncheckedCreateWithoutLangueInput[] | $Types.Skip
    connectOrCreate?: Member_langueCreateOrConnectWithoutLangueInput | Member_langueCreateOrConnectWithoutLangueInput[] | $Types.Skip
    upsert?: Member_langueUpsertWithWhereUniqueWithoutLangueInput | Member_langueUpsertWithWhereUniqueWithoutLangueInput[] | $Types.Skip
    createMany?: Member_langueCreateManyLangueInputEnvelope | $Types.Skip
    set?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
    disconnect?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
    delete?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
    connect?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
    update?: Member_langueUpdateWithWhereUniqueWithoutLangueInput | Member_langueUpdateWithWhereUniqueWithoutLangueInput[] | $Types.Skip
    updateMany?: Member_langueUpdateManyWithWhereWithoutLangueInput | Member_langueUpdateManyWithWhereWithoutLangueInput[] | $Types.Skip
    deleteMany?: Member_langueScalarWhereInput | Member_langueScalarWhereInput[] | $Types.Skip
  }

  export type Member_langueUncheckedUpdateManyWithoutLangueNestedInput = {
    create?: XOR<Member_langueCreateWithoutLangueInput, Member_langueUncheckedCreateWithoutLangueInput> | Member_langueCreateWithoutLangueInput[] | Member_langueUncheckedCreateWithoutLangueInput[] | $Types.Skip
    connectOrCreate?: Member_langueCreateOrConnectWithoutLangueInput | Member_langueCreateOrConnectWithoutLangueInput[] | $Types.Skip
    upsert?: Member_langueUpsertWithWhereUniqueWithoutLangueInput | Member_langueUpsertWithWhereUniqueWithoutLangueInput[] | $Types.Skip
    createMany?: Member_langueCreateManyLangueInputEnvelope | $Types.Skip
    set?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
    disconnect?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
    delete?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
    connect?: Member_langueWhereUniqueInput | Member_langueWhereUniqueInput[] | $Types.Skip
    update?: Member_langueUpdateWithWhereUniqueWithoutLangueInput | Member_langueUpdateWithWhereUniqueWithoutLangueInput[] | $Types.Skip
    updateMany?: Member_langueUpdateManyWithWhereWithoutLangueInput | Member_langueUpdateManyWithWhereWithoutLangueInput[] | $Types.Skip
    deleteMany?: Member_langueScalarWhereInput | Member_langueScalarWhereInput[] | $Types.Skip
  }

  export type SkillCreateNestedOneWithoutMember_skillInput = {
    create?: XOR<SkillCreateWithoutMember_skillInput, SkillUncheckedCreateWithoutMember_skillInput> | $Types.Skip
    connectOrCreate?: SkillCreateOrConnectWithoutMember_skillInput | $Types.Skip
    connect?: SkillWhereUniqueInput | $Types.Skip
  }

  export type SkillUpdateOneRequiredWithoutMember_skillNestedInput = {
    create?: XOR<SkillCreateWithoutMember_skillInput, SkillUncheckedCreateWithoutMember_skillInput> | $Types.Skip
    connectOrCreate?: SkillCreateOrConnectWithoutMember_skillInput | $Types.Skip
    upsert?: SkillUpsertWithoutMember_skillInput | $Types.Skip
    connect?: SkillWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutMember_skillInput, SkillUpdateWithoutMember_skillInput>, SkillUncheckedUpdateWithoutMember_skillInput> | $Types.Skip
  }

  export type LangueCreateNestedOneWithoutMember_langueInput = {
    create?: XOR<LangueCreateWithoutMember_langueInput, LangueUncheckedCreateWithoutMember_langueInput> | $Types.Skip
    connectOrCreate?: LangueCreateOrConnectWithoutMember_langueInput | $Types.Skip
    connect?: LangueWhereUniqueInput | $Types.Skip
  }

  export type LangueUpdateOneRequiredWithoutMember_langueNestedInput = {
    create?: XOR<LangueCreateWithoutMember_langueInput, LangueUncheckedCreateWithoutMember_langueInput> | $Types.Skip
    connectOrCreate?: LangueCreateOrConnectWithoutMember_langueInput | $Types.Skip
    upsert?: LangueUpsertWithoutMember_langueInput | $Types.Skip
    connect?: LangueWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<LangueUpdateToOneWithWhereWithoutMember_langueInput, LangueUpdateWithoutMember_langueInput>, LangueUncheckedUpdateWithoutMember_langueInput> | $Types.Skip
  }

  export type Job_offerCreateNestedOneWithoutMember_offerInput = {
    create?: XOR<Job_offerCreateWithoutMember_offerInput, Job_offerUncheckedCreateWithoutMember_offerInput> | $Types.Skip
    connectOrCreate?: Job_offerCreateOrConnectWithoutMember_offerInput | $Types.Skip
    connect?: Job_offerWhereUniqueInput | $Types.Skip
  }

  export type Job_offerUpdateOneRequiredWithoutMember_offerNestedInput = {
    create?: XOR<Job_offerCreateWithoutMember_offerInput, Job_offerUncheckedCreateWithoutMember_offerInput> | $Types.Skip
    connectOrCreate?: Job_offerCreateOrConnectWithoutMember_offerInput | $Types.Skip
    upsert?: Job_offerUpsertWithoutMember_offerInput | $Types.Skip
    connect?: Job_offerWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<Job_offerUpdateToOneWithWhereWithoutMember_offerInput, Job_offerUpdateWithoutMember_offerInput>, Job_offerUncheckedUpdateWithoutMember_offerInput> | $Types.Skip
  }

  export type Job_offerCreateNestedOneWithoutCandidacyInput = {
    create?: XOR<Job_offerCreateWithoutCandidacyInput, Job_offerUncheckedCreateWithoutCandidacyInput> | $Types.Skip
    connectOrCreate?: Job_offerCreateOrConnectWithoutCandidacyInput | $Types.Skip
    connect?: Job_offerWhereUniqueInput | $Types.Skip
  }

  export type NullableEnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status | null | $Types.Skip
  }

  export type Job_offerUpdateOneRequiredWithoutCandidacyNestedInput = {
    create?: XOR<Job_offerCreateWithoutCandidacyInput, Job_offerUncheckedCreateWithoutCandidacyInput> | $Types.Skip
    connectOrCreate?: Job_offerCreateOrConnectWithoutCandidacyInput | $Types.Skip
    upsert?: Job_offerUpsertWithoutCandidacyInput | $Types.Skip
    connect?: Job_offerWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<Job_offerUpdateToOneWithWhereWithoutCandidacyInput, Job_offerUpdateWithoutCandidacyInput>, Job_offerUncheckedUpdateWithoutCandidacyInput> | $Types.Skip
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null | $Types.Skip
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null | $Types.Skip
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | null | $Types.Skip
    notIn?: Date[] | string[] | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null | $Types.Skip
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null | $Types.Skip
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | null | $Types.Skip
    notIn?: Date[] | string[] | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedEnumSkillsFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Skills[] | $Types.Skip
    notIn?: $Enums.Skills[] | $Types.Skip
    not?: NestedEnumSkillsFilter<$PrismaModel> | $Enums.Skills | $Types.Skip
  }

  export type NestedEnumSkillsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Skills[] | $Types.Skip
    notIn?: $Enums.Skills[] | $Types.Skip
    not?: NestedEnumSkillsWithAggregatesFilter<$PrismaModel> | $Enums.Skills | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumSkillsFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumSkillsFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumMadSkillsFilter<$PrismaModel = never> = {
    equals?: $Enums.MadSkills | EnumMadSkillsFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.MadSkills[] | $Types.Skip
    notIn?: $Enums.MadSkills[] | $Types.Skip
    not?: NestedEnumMadSkillsFilter<$PrismaModel> | $Enums.MadSkills | $Types.Skip
  }

  export type NestedEnumMadSkillsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MadSkills | EnumMadSkillsFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.MadSkills[] | $Types.Skip
    notIn?: $Enums.MadSkills[] | $Types.Skip
    not?: NestedEnumMadSkillsWithAggregatesFilter<$PrismaModel> | $Enums.MadSkills | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumMadSkillsFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumMadSkillsFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: $Enums.Status[] | null | $Types.Skip
    notIn?: $Enums.Status[] | null | $Types.Skip
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null | $Types.Skip
  }

  export type NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: $Enums.Status[] | null | $Types.Skip
    notIn?: $Enums.Status[] | null | $Types.Skip
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumStatusNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumStatusNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type Member_offerCreateWithoutJob_offerInput = {
    member_id: number
  }

  export type Member_offerUncheckedCreateWithoutJob_offerInput = {
    member_id: number
  }

  export type Member_offerCreateOrConnectWithoutJob_offerInput = {
    where: Member_offerWhereUniqueInput
    create: XOR<Member_offerCreateWithoutJob_offerInput, Member_offerUncheckedCreateWithoutJob_offerInput>
  }

  export type Member_offerCreateManyJob_offerInputEnvelope = {
    data: Member_offerCreateManyJob_offerInput | Member_offerCreateManyJob_offerInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CandidacyCreateWithoutJob_offerInput = {
    member_id: number
    cv_id: string
    remember?: Date | string | null | $Types.Skip
    status?: $Enums.Status | null | $Types.Skip
    description?: string | null | $Types.Skip
  }

  export type CandidacyUncheckedCreateWithoutJob_offerInput = {
    member_id: number
    cv_id: string
    remember?: Date | string | null | $Types.Skip
    status?: $Enums.Status | null | $Types.Skip
    description?: string | null | $Types.Skip
  }

  export type CandidacyCreateOrConnectWithoutJob_offerInput = {
    where: CandidacyWhereUniqueInput
    create: XOR<CandidacyCreateWithoutJob_offerInput, CandidacyUncheckedCreateWithoutJob_offerInput>
  }

  export type CandidacyCreateManyJob_offerInputEnvelope = {
    data: CandidacyCreateManyJob_offerInput | CandidacyCreateManyJob_offerInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type Member_offerUpsertWithWhereUniqueWithoutJob_offerInput = {
    where: Member_offerWhereUniqueInput
    update: XOR<Member_offerUpdateWithoutJob_offerInput, Member_offerUncheckedUpdateWithoutJob_offerInput>
    create: XOR<Member_offerCreateWithoutJob_offerInput, Member_offerUncheckedCreateWithoutJob_offerInput>
  }

  export type Member_offerUpdateWithWhereUniqueWithoutJob_offerInput = {
    where: Member_offerWhereUniqueInput
    data: XOR<Member_offerUpdateWithoutJob_offerInput, Member_offerUncheckedUpdateWithoutJob_offerInput>
  }

  export type Member_offerUpdateManyWithWhereWithoutJob_offerInput = {
    where: Member_offerScalarWhereInput
    data: XOR<Member_offerUpdateManyMutationInput, Member_offerUncheckedUpdateManyWithoutJob_offerInput>
  }

  export type Member_offerScalarWhereInput = {
    AND?: Member_offerScalarWhereInput | Member_offerScalarWhereInput[] | $Types.Skip
    OR?: Member_offerScalarWhereInput[] | $Types.Skip
    NOT?: Member_offerScalarWhereInput | Member_offerScalarWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Member_offer"> | number | $Types.Skip
    offer_id?: IntFilter<"Member_offer"> | number | $Types.Skip
  }

  export type CandidacyUpsertWithWhereUniqueWithoutJob_offerInput = {
    where: CandidacyWhereUniqueInput
    update: XOR<CandidacyUpdateWithoutJob_offerInput, CandidacyUncheckedUpdateWithoutJob_offerInput>
    create: XOR<CandidacyCreateWithoutJob_offerInput, CandidacyUncheckedCreateWithoutJob_offerInput>
  }

  export type CandidacyUpdateWithWhereUniqueWithoutJob_offerInput = {
    where: CandidacyWhereUniqueInput
    data: XOR<CandidacyUpdateWithoutJob_offerInput, CandidacyUncheckedUpdateWithoutJob_offerInput>
  }

  export type CandidacyUpdateManyWithWhereWithoutJob_offerInput = {
    where: CandidacyScalarWhereInput
    data: XOR<CandidacyUpdateManyMutationInput, CandidacyUncheckedUpdateManyWithoutJob_offerInput>
  }

  export type CandidacyScalarWhereInput = {
    AND?: CandidacyScalarWhereInput | CandidacyScalarWhereInput[] | $Types.Skip
    OR?: CandidacyScalarWhereInput[] | $Types.Skip
    NOT?: CandidacyScalarWhereInput | CandidacyScalarWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Candidacy"> | number | $Types.Skip
    cv_id?: StringFilter<"Candidacy"> | string | $Types.Skip
    job_offer_id?: IntFilter<"Candidacy"> | number | $Types.Skip
    remember?: DateTimeNullableFilter<"Candidacy"> | Date | string | null | $Types.Skip
    status?: EnumStatusNullableFilter<"Candidacy"> | $Enums.Status | null | $Types.Skip
    description?: StringNullableFilter<"Candidacy"> | string | null | $Types.Skip
  }

  export type Member_skillCreateWithoutSkillInput = {
    member_id: number
  }

  export type Member_skillUncheckedCreateWithoutSkillInput = {
    member_id: number
  }

  export type Member_skillCreateOrConnectWithoutSkillInput = {
    where: Member_skillWhereUniqueInput
    create: XOR<Member_skillCreateWithoutSkillInput, Member_skillUncheckedCreateWithoutSkillInput>
  }

  export type Member_skillCreateManySkillInputEnvelope = {
    data: Member_skillCreateManySkillInput | Member_skillCreateManySkillInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type Member_skillUpsertWithWhereUniqueWithoutSkillInput = {
    where: Member_skillWhereUniqueInput
    update: XOR<Member_skillUpdateWithoutSkillInput, Member_skillUncheckedUpdateWithoutSkillInput>
    create: XOR<Member_skillCreateWithoutSkillInput, Member_skillUncheckedCreateWithoutSkillInput>
  }

  export type Member_skillUpdateWithWhereUniqueWithoutSkillInput = {
    where: Member_skillWhereUniqueInput
    data: XOR<Member_skillUpdateWithoutSkillInput, Member_skillUncheckedUpdateWithoutSkillInput>
  }

  export type Member_skillUpdateManyWithWhereWithoutSkillInput = {
    where: Member_skillScalarWhereInput
    data: XOR<Member_skillUpdateManyMutationInput, Member_skillUncheckedUpdateManyWithoutSkillInput>
  }

  export type Member_skillScalarWhereInput = {
    AND?: Member_skillScalarWhereInput | Member_skillScalarWhereInput[] | $Types.Skip
    OR?: Member_skillScalarWhereInput[] | $Types.Skip
    NOT?: Member_skillScalarWhereInput | Member_skillScalarWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Member_skill"> | number | $Types.Skip
    skill_id?: IntFilter<"Member_skill"> | number | $Types.Skip
  }

  export type Member_langueCreateWithoutLangueInput = {
    member_id: number
    level?: string | null | $Types.Skip
  }

  export type Member_langueUncheckedCreateWithoutLangueInput = {
    member_id: number
    level?: string | null | $Types.Skip
  }

  export type Member_langueCreateOrConnectWithoutLangueInput = {
    where: Member_langueWhereUniqueInput
    create: XOR<Member_langueCreateWithoutLangueInput, Member_langueUncheckedCreateWithoutLangueInput>
  }

  export type Member_langueCreateManyLangueInputEnvelope = {
    data: Member_langueCreateManyLangueInput | Member_langueCreateManyLangueInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type Member_langueUpsertWithWhereUniqueWithoutLangueInput = {
    where: Member_langueWhereUniqueInput
    update: XOR<Member_langueUpdateWithoutLangueInput, Member_langueUncheckedUpdateWithoutLangueInput>
    create: XOR<Member_langueCreateWithoutLangueInput, Member_langueUncheckedCreateWithoutLangueInput>
  }

  export type Member_langueUpdateWithWhereUniqueWithoutLangueInput = {
    where: Member_langueWhereUniqueInput
    data: XOR<Member_langueUpdateWithoutLangueInput, Member_langueUncheckedUpdateWithoutLangueInput>
  }

  export type Member_langueUpdateManyWithWhereWithoutLangueInput = {
    where: Member_langueScalarWhereInput
    data: XOR<Member_langueUpdateManyMutationInput, Member_langueUncheckedUpdateManyWithoutLangueInput>
  }

  export type Member_langueScalarWhereInput = {
    AND?: Member_langueScalarWhereInput | Member_langueScalarWhereInput[] | $Types.Skip
    OR?: Member_langueScalarWhereInput[] | $Types.Skip
    NOT?: Member_langueScalarWhereInput | Member_langueScalarWhereInput[] | $Types.Skip
    member_id?: IntFilter<"Member_langue"> | number | $Types.Skip
    langue_id?: IntFilter<"Member_langue"> | number | $Types.Skip
    level?: StringNullableFilter<"Member_langue"> | string | null | $Types.Skip
  }

  export type SkillCreateWithoutMember_skillInput = {
    title: string
    category: $Enums.Skills
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type SkillUncheckedCreateWithoutMember_skillInput = {
    id?: number | $Types.Skip
    title: string
    category: $Enums.Skills
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type SkillCreateOrConnectWithoutMember_skillInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutMember_skillInput, SkillUncheckedCreateWithoutMember_skillInput>
  }

  export type SkillUpsertWithoutMember_skillInput = {
    update: XOR<SkillUpdateWithoutMember_skillInput, SkillUncheckedUpdateWithoutMember_skillInput>
    create: XOR<SkillCreateWithoutMember_skillInput, SkillUncheckedCreateWithoutMember_skillInput>
    where?: SkillWhereInput | $Types.Skip
  }

  export type SkillUpdateToOneWithWhereWithoutMember_skillInput = {
    where?: SkillWhereInput | $Types.Skip
    data: XOR<SkillUpdateWithoutMember_skillInput, SkillUncheckedUpdateWithoutMember_skillInput>
  }

  export type SkillUpdateWithoutMember_skillInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type SkillUncheckedUpdateWithoutMember_skillInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type LangueCreateWithoutMember_langueInput = {
    title: string
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type LangueUncheckedCreateWithoutMember_langueInput = {
    id?: number | $Types.Skip
    title: string
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
  }

  export type LangueCreateOrConnectWithoutMember_langueInput = {
    where: LangueWhereUniqueInput
    create: XOR<LangueCreateWithoutMember_langueInput, LangueUncheckedCreateWithoutMember_langueInput>
  }

  export type LangueUpsertWithoutMember_langueInput = {
    update: XOR<LangueUpdateWithoutMember_langueInput, LangueUncheckedUpdateWithoutMember_langueInput>
    create: XOR<LangueCreateWithoutMember_langueInput, LangueUncheckedCreateWithoutMember_langueInput>
    where?: LangueWhereInput | $Types.Skip
  }

  export type LangueUpdateToOneWithWhereWithoutMember_langueInput = {
    where?: LangueWhereInput | $Types.Skip
    data: XOR<LangueUpdateWithoutMember_langueInput, LangueUncheckedUpdateWithoutMember_langueInput>
  }

  export type LangueUpdateWithoutMember_langueInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type LangueUncheckedUpdateWithoutMember_langueInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type Job_offerCreateWithoutMember_offerInput = {
    title: string
    ftid: string
    location?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience_length?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    description: string
    update_ft?: Date | string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Candidacy?: CandidacyCreateNestedManyWithoutJob_offerInput | $Types.Skip
  }

  export type Job_offerUncheckedCreateWithoutMember_offerInput = {
    id?: number | $Types.Skip
    title: string
    ftid: string
    location?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience_length?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    description: string
    update_ft?: Date | string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Candidacy?: CandidacyUncheckedCreateNestedManyWithoutJob_offerInput | $Types.Skip
  }

  export type Job_offerCreateOrConnectWithoutMember_offerInput = {
    where: Job_offerWhereUniqueInput
    create: XOR<Job_offerCreateWithoutMember_offerInput, Job_offerUncheckedCreateWithoutMember_offerInput>
  }

  export type Job_offerUpsertWithoutMember_offerInput = {
    update: XOR<Job_offerUpdateWithoutMember_offerInput, Job_offerUncheckedUpdateWithoutMember_offerInput>
    create: XOR<Job_offerCreateWithoutMember_offerInput, Job_offerUncheckedCreateWithoutMember_offerInput>
    where?: Job_offerWhereInput | $Types.Skip
  }

  export type Job_offerUpdateToOneWithWhereWithoutMember_offerInput = {
    where?: Job_offerWhereInput | $Types.Skip
    data: XOR<Job_offerUpdateWithoutMember_offerInput, Job_offerUncheckedUpdateWithoutMember_offerInput>
  }

  export type Job_offerUpdateWithoutMember_offerInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ftid?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience_length?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    update_ft?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Candidacy?: CandidacyUpdateManyWithoutJob_offerNestedInput | $Types.Skip
  }

  export type Job_offerUncheckedUpdateWithoutMember_offerInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ftid?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience_length?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    update_ft?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Candidacy?: CandidacyUncheckedUpdateManyWithoutJob_offerNestedInput | $Types.Skip
  }

  export type Job_offerCreateWithoutCandidacyInput = {
    title: string
    ftid: string
    location?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience_length?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    description: string
    update_ft?: Date | string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Member_offer?: Member_offerCreateNestedManyWithoutJob_offerInput | $Types.Skip
  }

  export type Job_offerUncheckedCreateWithoutCandidacyInput = {
    id?: number | $Types.Skip
    title: string
    ftid: string
    location?: string | null | $Types.Skip
    contract_type?: string | null | $Types.Skip
    experience_length?: string | null | $Types.Skip
    professional_field?: string | null | $Types.Skip
    work_time?: string | null | $Types.Skip
    salary?: string | null | $Types.Skip
    handy_friendly?: boolean | null | $Types.Skip
    description: string
    update_ft?: Date | string | null | $Types.Skip
    created_at?: Date | string | $Types.Skip
    updated_at?: Date | string | $Types.Skip
    Member_offer?: Member_offerUncheckedCreateNestedManyWithoutJob_offerInput | $Types.Skip
  }

  export type Job_offerCreateOrConnectWithoutCandidacyInput = {
    where: Job_offerWhereUniqueInput
    create: XOR<Job_offerCreateWithoutCandidacyInput, Job_offerUncheckedCreateWithoutCandidacyInput>
  }

  export type Job_offerUpsertWithoutCandidacyInput = {
    update: XOR<Job_offerUpdateWithoutCandidacyInput, Job_offerUncheckedUpdateWithoutCandidacyInput>
    create: XOR<Job_offerCreateWithoutCandidacyInput, Job_offerUncheckedCreateWithoutCandidacyInput>
    where?: Job_offerWhereInput | $Types.Skip
  }

  export type Job_offerUpdateToOneWithWhereWithoutCandidacyInput = {
    where?: Job_offerWhereInput | $Types.Skip
    data: XOR<Job_offerUpdateWithoutCandidacyInput, Job_offerUncheckedUpdateWithoutCandidacyInput>
  }

  export type Job_offerUpdateWithoutCandidacyInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ftid?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience_length?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    update_ft?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Member_offer?: Member_offerUpdateManyWithoutJob_offerNestedInput | $Types.Skip
  }

  export type Job_offerUncheckedUpdateWithoutCandidacyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ftid?: StringFieldUpdateOperationsInput | string | $Types.Skip
    location?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    contract_type?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    experience_length?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    professional_field?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    work_time?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    salary?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    handy_friendly?: NullableBoolFieldUpdateOperationsInput | boolean | null | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    update_ft?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Member_offer?: Member_offerUncheckedUpdateManyWithoutJob_offerNestedInput | $Types.Skip
  }

  export type Member_offerCreateManyJob_offerInput = {
    member_id: number
  }

  export type CandidacyCreateManyJob_offerInput = {
    member_id: number
    cv_id: string
    remember?: Date | string | null | $Types.Skip
    status?: $Enums.Status | null | $Types.Skip
    description?: string | null | $Types.Skip
  }

  export type Member_offerUpdateWithoutJob_offerInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_offerUncheckedUpdateWithoutJob_offerInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_offerUncheckedUpdateManyWithoutJob_offerInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CandidacyUpdateWithoutJob_offerInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cv_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    remember?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type CandidacyUncheckedUpdateWithoutJob_offerInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cv_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    remember?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type CandidacyUncheckedUpdateManyWithoutJob_offerInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cv_id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    remember?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    status?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type Member_skillCreateManySkillInput = {
    member_id: number
  }

  export type Member_skillUpdateWithoutSkillInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_skillUncheckedUpdateWithoutSkillInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_skillUncheckedUpdateManyWithoutSkillInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type Member_langueCreateManyLangueInput = {
    member_id: number
    level?: string | null | $Types.Skip
  }

  export type Member_langueUpdateWithoutLangueInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    level?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type Member_langueUncheckedUpdateWithoutLangueInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    level?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type Member_langueUncheckedUpdateManyWithoutLangueInput = {
    member_id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    level?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
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