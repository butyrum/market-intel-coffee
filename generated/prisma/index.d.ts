
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PesquisaMercado
 * 
 */
export type PesquisaMercado = $Result.DefaultSelection<Prisma.$PesquisaMercadoPayload>
/**
 * Model Competidor
 * 
 */
export type Competidor = $Result.DefaultSelection<Prisma.$CompetidorPayload>
/**
 * Model ItemCardapio
 * 
 */
export type ItemCardapio = $Result.DefaultSelection<Prisma.$ItemCardapioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pesquisaMercado`: Exposes CRUD operations for the **PesquisaMercado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PesquisaMercados
    * const pesquisaMercados = await prisma.pesquisaMercado.findMany()
    * ```
    */
  get pesquisaMercado(): Prisma.PesquisaMercadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competidor`: Exposes CRUD operations for the **Competidor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competidors
    * const competidors = await prisma.competidor.findMany()
    * ```
    */
  get competidor(): Prisma.CompetidorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemCardapio`: Exposes CRUD operations for the **ItemCardapio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemCardapios
    * const itemCardapios = await prisma.itemCardapio.findMany()
    * ```
    */
  get itemCardapio(): Prisma.ItemCardapioDelegate<ExtArgs, ClientOptions>;
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
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

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
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    PesquisaMercado: 'PesquisaMercado',
    Competidor: 'Competidor',
    ItemCardapio: 'ItemCardapio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pesquisaMercado" | "competidor" | "itemCardapio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PesquisaMercado: {
        payload: Prisma.$PesquisaMercadoPayload<ExtArgs>
        fields: Prisma.PesquisaMercadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PesquisaMercadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesquisaMercadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload>
          }
          findFirst: {
            args: Prisma.PesquisaMercadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesquisaMercadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload>
          }
          findMany: {
            args: Prisma.PesquisaMercadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload>[]
          }
          create: {
            args: Prisma.PesquisaMercadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload>
          }
          createMany: {
            args: Prisma.PesquisaMercadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PesquisaMercadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload>[]
          }
          delete: {
            args: Prisma.PesquisaMercadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload>
          }
          update: {
            args: Prisma.PesquisaMercadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload>
          }
          deleteMany: {
            args: Prisma.PesquisaMercadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PesquisaMercadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PesquisaMercadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload>[]
          }
          upsert: {
            args: Prisma.PesquisaMercadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesquisaMercadoPayload>
          }
          aggregate: {
            args: Prisma.PesquisaMercadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePesquisaMercado>
          }
          groupBy: {
            args: Prisma.PesquisaMercadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesquisaMercadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesquisaMercadoCountArgs<ExtArgs>
            result: $Utils.Optional<PesquisaMercadoCountAggregateOutputType> | number
          }
        }
      }
      Competidor: {
        payload: Prisma.$CompetidorPayload<ExtArgs>
        fields: Prisma.CompetidorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetidorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetidorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          findFirst: {
            args: Prisma.CompetidorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetidorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          findMany: {
            args: Prisma.CompetidorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>[]
          }
          create: {
            args: Prisma.CompetidorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          createMany: {
            args: Prisma.CompetidorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetidorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>[]
          }
          delete: {
            args: Prisma.CompetidorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          update: {
            args: Prisma.CompetidorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          deleteMany: {
            args: Prisma.CompetidorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetidorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetidorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>[]
          }
          upsert: {
            args: Prisma.CompetidorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetidorPayload>
          }
          aggregate: {
            args: Prisma.CompetidorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetidor>
          }
          groupBy: {
            args: Prisma.CompetidorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetidorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetidorCountArgs<ExtArgs>
            result: $Utils.Optional<CompetidorCountAggregateOutputType> | number
          }
        }
      }
      ItemCardapio: {
        payload: Prisma.$ItemCardapioPayload<ExtArgs>
        fields: Prisma.ItemCardapioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemCardapioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemCardapioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload>
          }
          findFirst: {
            args: Prisma.ItemCardapioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemCardapioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload>
          }
          findMany: {
            args: Prisma.ItemCardapioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload>[]
          }
          create: {
            args: Prisma.ItemCardapioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload>
          }
          createMany: {
            args: Prisma.ItemCardapioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCardapioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload>[]
          }
          delete: {
            args: Prisma.ItemCardapioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload>
          }
          update: {
            args: Prisma.ItemCardapioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload>
          }
          deleteMany: {
            args: Prisma.ItemCardapioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemCardapioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemCardapioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload>[]
          }
          upsert: {
            args: Prisma.ItemCardapioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCardapioPayload>
          }
          aggregate: {
            args: Prisma.ItemCardapioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemCardapio>
          }
          groupBy: {
            args: Prisma.ItemCardapioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemCardapioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCardapioCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCardapioCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pesquisaMercado?: PesquisaMercadoOmit
    competidor?: CompetidorOmit
    itemCardapio?: ItemCardapioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pesquisas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesquisas?: boolean | UserCountOutputTypeCountPesquisasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPesquisasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesquisaMercadoWhereInput
  }


  /**
   * Count Type PesquisaMercadoCountOutputType
   */

  export type PesquisaMercadoCountOutputType = {
    competidores: number
  }

  export type PesquisaMercadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competidores?: boolean | PesquisaMercadoCountOutputTypeCountCompetidoresArgs
  }

  // Custom InputTypes
  /**
   * PesquisaMercadoCountOutputType without action
   */
  export type PesquisaMercadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercadoCountOutputType
     */
    select?: PesquisaMercadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PesquisaMercadoCountOutputType without action
   */
  export type PesquisaMercadoCountOutputTypeCountCompetidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetidorWhereInput
  }


  /**
   * Count Type CompetidorCountOutputType
   */

  export type CompetidorCountOutputType = {
    itensCardapio: number
  }

  export type CompetidorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensCardapio?: boolean | CompetidorCountOutputTypeCountItensCardapioArgs
  }

  // Custom InputTypes
  /**
   * CompetidorCountOutputType without action
   */
  export type CompetidorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetidorCountOutputType
     */
    select?: CompetidorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetidorCountOutputType without action
   */
  export type CompetidorCountOutputTypeCountItensCardapioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCardapioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    pesquisas?: boolean | User$pesquisasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesquisas?: boolean | User$pesquisasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pesquisas: Prisma.$PesquisaMercadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pesquisas<T extends User$pesquisasArgs<ExtArgs> = {}>(args?: Subset<T, User$pesquisasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pesquisas
   */
  export type User$pesquisasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    where?: PesquisaMercadoWhereInput
    orderBy?: PesquisaMercadoOrderByWithRelationInput | PesquisaMercadoOrderByWithRelationInput[]
    cursor?: PesquisaMercadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesquisaMercadoScalarFieldEnum | PesquisaMercadoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PesquisaMercado
   */

  export type AggregatePesquisaMercado = {
    _count: PesquisaMercadoCountAggregateOutputType | null
    _min: PesquisaMercadoMinAggregateOutputType | null
    _max: PesquisaMercadoMaxAggregateOutputType | null
  }

  export type PesquisaMercadoMinAggregateOutputType = {
    id: string | null
    cidade: string | null
    estado: string | null
    status: string | null
    usuarioId: string | null
    criadoEm: Date | null
  }

  export type PesquisaMercadoMaxAggregateOutputType = {
    id: string | null
    cidade: string | null
    estado: string | null
    status: string | null
    usuarioId: string | null
    criadoEm: Date | null
  }

  export type PesquisaMercadoCountAggregateOutputType = {
    id: number
    cidade: number
    estado: number
    status: number
    usuarioId: number
    criadoEm: number
    _all: number
  }


  export type PesquisaMercadoMinAggregateInputType = {
    id?: true
    cidade?: true
    estado?: true
    status?: true
    usuarioId?: true
    criadoEm?: true
  }

  export type PesquisaMercadoMaxAggregateInputType = {
    id?: true
    cidade?: true
    estado?: true
    status?: true
    usuarioId?: true
    criadoEm?: true
  }

  export type PesquisaMercadoCountAggregateInputType = {
    id?: true
    cidade?: true
    estado?: true
    status?: true
    usuarioId?: true
    criadoEm?: true
    _all?: true
  }

  export type PesquisaMercadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PesquisaMercado to aggregate.
     */
    where?: PesquisaMercadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesquisaMercados to fetch.
     */
    orderBy?: PesquisaMercadoOrderByWithRelationInput | PesquisaMercadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesquisaMercadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesquisaMercados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesquisaMercados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PesquisaMercados
    **/
    _count?: true | PesquisaMercadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesquisaMercadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesquisaMercadoMaxAggregateInputType
  }

  export type GetPesquisaMercadoAggregateType<T extends PesquisaMercadoAggregateArgs> = {
        [P in keyof T & keyof AggregatePesquisaMercado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesquisaMercado[P]>
      : GetScalarType<T[P], AggregatePesquisaMercado[P]>
  }




  export type PesquisaMercadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesquisaMercadoWhereInput
    orderBy?: PesquisaMercadoOrderByWithAggregationInput | PesquisaMercadoOrderByWithAggregationInput[]
    by: PesquisaMercadoScalarFieldEnum[] | PesquisaMercadoScalarFieldEnum
    having?: PesquisaMercadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesquisaMercadoCountAggregateInputType | true
    _min?: PesquisaMercadoMinAggregateInputType
    _max?: PesquisaMercadoMaxAggregateInputType
  }

  export type PesquisaMercadoGroupByOutputType = {
    id: string
    cidade: string
    estado: string
    status: string
    usuarioId: string
    criadoEm: Date
    _count: PesquisaMercadoCountAggregateOutputType | null
    _min: PesquisaMercadoMinAggregateOutputType | null
    _max: PesquisaMercadoMaxAggregateOutputType | null
  }

  type GetPesquisaMercadoGroupByPayload<T extends PesquisaMercadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesquisaMercadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesquisaMercadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesquisaMercadoGroupByOutputType[P]>
            : GetScalarType<T[P], PesquisaMercadoGroupByOutputType[P]>
        }
      >
    >


  export type PesquisaMercadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidade?: boolean
    estado?: boolean
    status?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    competidores?: boolean | PesquisaMercado$competidoresArgs<ExtArgs>
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PesquisaMercadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesquisaMercado"]>

  export type PesquisaMercadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidade?: boolean
    estado?: boolean
    status?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesquisaMercado"]>

  export type PesquisaMercadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidade?: boolean
    estado?: boolean
    status?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesquisaMercado"]>

  export type PesquisaMercadoSelectScalar = {
    id?: boolean
    cidade?: boolean
    estado?: boolean
    status?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
  }

  export type PesquisaMercadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cidade" | "estado" | "status" | "usuarioId" | "criadoEm", ExtArgs["result"]["pesquisaMercado"]>
  export type PesquisaMercadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competidores?: boolean | PesquisaMercado$competidoresArgs<ExtArgs>
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PesquisaMercadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PesquisaMercadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PesquisaMercadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PesquisaMercadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PesquisaMercado"
    objects: {
      competidores: Prisma.$CompetidorPayload<ExtArgs>[]
      usuario: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cidade: string
      estado: string
      status: string
      usuarioId: string
      criadoEm: Date
    }, ExtArgs["result"]["pesquisaMercado"]>
    composites: {}
  }

  type PesquisaMercadoGetPayload<S extends boolean | null | undefined | PesquisaMercadoDefaultArgs> = $Result.GetResult<Prisma.$PesquisaMercadoPayload, S>

  type PesquisaMercadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PesquisaMercadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesquisaMercadoCountAggregateInputType | true
    }

  export interface PesquisaMercadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PesquisaMercado'], meta: { name: 'PesquisaMercado' } }
    /**
     * Find zero or one PesquisaMercado that matches the filter.
     * @param {PesquisaMercadoFindUniqueArgs} args - Arguments to find a PesquisaMercado
     * @example
     * // Get one PesquisaMercado
     * const pesquisaMercado = await prisma.pesquisaMercado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesquisaMercadoFindUniqueArgs>(args: SelectSubset<T, PesquisaMercadoFindUniqueArgs<ExtArgs>>): Prisma__PesquisaMercadoClient<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PesquisaMercado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesquisaMercadoFindUniqueOrThrowArgs} args - Arguments to find a PesquisaMercado
     * @example
     * // Get one PesquisaMercado
     * const pesquisaMercado = await prisma.pesquisaMercado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesquisaMercadoFindUniqueOrThrowArgs>(args: SelectSubset<T, PesquisaMercadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PesquisaMercadoClient<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PesquisaMercado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesquisaMercadoFindFirstArgs} args - Arguments to find a PesquisaMercado
     * @example
     * // Get one PesquisaMercado
     * const pesquisaMercado = await prisma.pesquisaMercado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesquisaMercadoFindFirstArgs>(args?: SelectSubset<T, PesquisaMercadoFindFirstArgs<ExtArgs>>): Prisma__PesquisaMercadoClient<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PesquisaMercado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesquisaMercadoFindFirstOrThrowArgs} args - Arguments to find a PesquisaMercado
     * @example
     * // Get one PesquisaMercado
     * const pesquisaMercado = await prisma.pesquisaMercado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesquisaMercadoFindFirstOrThrowArgs>(args?: SelectSubset<T, PesquisaMercadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PesquisaMercadoClient<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PesquisaMercados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesquisaMercadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PesquisaMercados
     * const pesquisaMercados = await prisma.pesquisaMercado.findMany()
     * 
     * // Get first 10 PesquisaMercados
     * const pesquisaMercados = await prisma.pesquisaMercado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesquisaMercadoWithIdOnly = await prisma.pesquisaMercado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PesquisaMercadoFindManyArgs>(args?: SelectSubset<T, PesquisaMercadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PesquisaMercado.
     * @param {PesquisaMercadoCreateArgs} args - Arguments to create a PesquisaMercado.
     * @example
     * // Create one PesquisaMercado
     * const PesquisaMercado = await prisma.pesquisaMercado.create({
     *   data: {
     *     // ... data to create a PesquisaMercado
     *   }
     * })
     * 
     */
    create<T extends PesquisaMercadoCreateArgs>(args: SelectSubset<T, PesquisaMercadoCreateArgs<ExtArgs>>): Prisma__PesquisaMercadoClient<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PesquisaMercados.
     * @param {PesquisaMercadoCreateManyArgs} args - Arguments to create many PesquisaMercados.
     * @example
     * // Create many PesquisaMercados
     * const pesquisaMercado = await prisma.pesquisaMercado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PesquisaMercadoCreateManyArgs>(args?: SelectSubset<T, PesquisaMercadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PesquisaMercados and returns the data saved in the database.
     * @param {PesquisaMercadoCreateManyAndReturnArgs} args - Arguments to create many PesquisaMercados.
     * @example
     * // Create many PesquisaMercados
     * const pesquisaMercado = await prisma.pesquisaMercado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PesquisaMercados and only return the `id`
     * const pesquisaMercadoWithIdOnly = await prisma.pesquisaMercado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PesquisaMercadoCreateManyAndReturnArgs>(args?: SelectSubset<T, PesquisaMercadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PesquisaMercado.
     * @param {PesquisaMercadoDeleteArgs} args - Arguments to delete one PesquisaMercado.
     * @example
     * // Delete one PesquisaMercado
     * const PesquisaMercado = await prisma.pesquisaMercado.delete({
     *   where: {
     *     // ... filter to delete one PesquisaMercado
     *   }
     * })
     * 
     */
    delete<T extends PesquisaMercadoDeleteArgs>(args: SelectSubset<T, PesquisaMercadoDeleteArgs<ExtArgs>>): Prisma__PesquisaMercadoClient<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PesquisaMercado.
     * @param {PesquisaMercadoUpdateArgs} args - Arguments to update one PesquisaMercado.
     * @example
     * // Update one PesquisaMercado
     * const pesquisaMercado = await prisma.pesquisaMercado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PesquisaMercadoUpdateArgs>(args: SelectSubset<T, PesquisaMercadoUpdateArgs<ExtArgs>>): Prisma__PesquisaMercadoClient<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PesquisaMercados.
     * @param {PesquisaMercadoDeleteManyArgs} args - Arguments to filter PesquisaMercados to delete.
     * @example
     * // Delete a few PesquisaMercados
     * const { count } = await prisma.pesquisaMercado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PesquisaMercadoDeleteManyArgs>(args?: SelectSubset<T, PesquisaMercadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PesquisaMercados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesquisaMercadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PesquisaMercados
     * const pesquisaMercado = await prisma.pesquisaMercado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PesquisaMercadoUpdateManyArgs>(args: SelectSubset<T, PesquisaMercadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PesquisaMercados and returns the data updated in the database.
     * @param {PesquisaMercadoUpdateManyAndReturnArgs} args - Arguments to update many PesquisaMercados.
     * @example
     * // Update many PesquisaMercados
     * const pesquisaMercado = await prisma.pesquisaMercado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PesquisaMercados and only return the `id`
     * const pesquisaMercadoWithIdOnly = await prisma.pesquisaMercado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PesquisaMercadoUpdateManyAndReturnArgs>(args: SelectSubset<T, PesquisaMercadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PesquisaMercado.
     * @param {PesquisaMercadoUpsertArgs} args - Arguments to update or create a PesquisaMercado.
     * @example
     * // Update or create a PesquisaMercado
     * const pesquisaMercado = await prisma.pesquisaMercado.upsert({
     *   create: {
     *     // ... data to create a PesquisaMercado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PesquisaMercado we want to update
     *   }
     * })
     */
    upsert<T extends PesquisaMercadoUpsertArgs>(args: SelectSubset<T, PesquisaMercadoUpsertArgs<ExtArgs>>): Prisma__PesquisaMercadoClient<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PesquisaMercados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesquisaMercadoCountArgs} args - Arguments to filter PesquisaMercados to count.
     * @example
     * // Count the number of PesquisaMercados
     * const count = await prisma.pesquisaMercado.count({
     *   where: {
     *     // ... the filter for the PesquisaMercados we want to count
     *   }
     * })
    **/
    count<T extends PesquisaMercadoCountArgs>(
      args?: Subset<T, PesquisaMercadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesquisaMercadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PesquisaMercado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesquisaMercadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesquisaMercadoAggregateArgs>(args: Subset<T, PesquisaMercadoAggregateArgs>): Prisma.PrismaPromise<GetPesquisaMercadoAggregateType<T>>

    /**
     * Group by PesquisaMercado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesquisaMercadoGroupByArgs} args - Group by arguments.
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
      T extends PesquisaMercadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesquisaMercadoGroupByArgs['orderBy'] }
        : { orderBy?: PesquisaMercadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PesquisaMercadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesquisaMercadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PesquisaMercado model
   */
  readonly fields: PesquisaMercadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PesquisaMercado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PesquisaMercadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competidores<T extends PesquisaMercado$competidoresArgs<ExtArgs> = {}>(args?: Subset<T, PesquisaMercado$competidoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PesquisaMercado model
   */
  interface PesquisaMercadoFieldRefs {
    readonly id: FieldRef<"PesquisaMercado", 'String'>
    readonly cidade: FieldRef<"PesquisaMercado", 'String'>
    readonly estado: FieldRef<"PesquisaMercado", 'String'>
    readonly status: FieldRef<"PesquisaMercado", 'String'>
    readonly usuarioId: FieldRef<"PesquisaMercado", 'String'>
    readonly criadoEm: FieldRef<"PesquisaMercado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PesquisaMercado findUnique
   */
  export type PesquisaMercadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    /**
     * Filter, which PesquisaMercado to fetch.
     */
    where: PesquisaMercadoWhereUniqueInput
  }

  /**
   * PesquisaMercado findUniqueOrThrow
   */
  export type PesquisaMercadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    /**
     * Filter, which PesquisaMercado to fetch.
     */
    where: PesquisaMercadoWhereUniqueInput
  }

  /**
   * PesquisaMercado findFirst
   */
  export type PesquisaMercadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    /**
     * Filter, which PesquisaMercado to fetch.
     */
    where?: PesquisaMercadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesquisaMercados to fetch.
     */
    orderBy?: PesquisaMercadoOrderByWithRelationInput | PesquisaMercadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PesquisaMercados.
     */
    cursor?: PesquisaMercadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesquisaMercados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesquisaMercados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PesquisaMercados.
     */
    distinct?: PesquisaMercadoScalarFieldEnum | PesquisaMercadoScalarFieldEnum[]
  }

  /**
   * PesquisaMercado findFirstOrThrow
   */
  export type PesquisaMercadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    /**
     * Filter, which PesquisaMercado to fetch.
     */
    where?: PesquisaMercadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesquisaMercados to fetch.
     */
    orderBy?: PesquisaMercadoOrderByWithRelationInput | PesquisaMercadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PesquisaMercados.
     */
    cursor?: PesquisaMercadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesquisaMercados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesquisaMercados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PesquisaMercados.
     */
    distinct?: PesquisaMercadoScalarFieldEnum | PesquisaMercadoScalarFieldEnum[]
  }

  /**
   * PesquisaMercado findMany
   */
  export type PesquisaMercadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    /**
     * Filter, which PesquisaMercados to fetch.
     */
    where?: PesquisaMercadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesquisaMercados to fetch.
     */
    orderBy?: PesquisaMercadoOrderByWithRelationInput | PesquisaMercadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PesquisaMercados.
     */
    cursor?: PesquisaMercadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesquisaMercados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesquisaMercados.
     */
    skip?: number
    distinct?: PesquisaMercadoScalarFieldEnum | PesquisaMercadoScalarFieldEnum[]
  }

  /**
   * PesquisaMercado create
   */
  export type PesquisaMercadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    /**
     * The data needed to create a PesquisaMercado.
     */
    data: XOR<PesquisaMercadoCreateInput, PesquisaMercadoUncheckedCreateInput>
  }

  /**
   * PesquisaMercado createMany
   */
  export type PesquisaMercadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PesquisaMercados.
     */
    data: PesquisaMercadoCreateManyInput | PesquisaMercadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PesquisaMercado createManyAndReturn
   */
  export type PesquisaMercadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * The data used to create many PesquisaMercados.
     */
    data: PesquisaMercadoCreateManyInput | PesquisaMercadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PesquisaMercado update
   */
  export type PesquisaMercadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    /**
     * The data needed to update a PesquisaMercado.
     */
    data: XOR<PesquisaMercadoUpdateInput, PesquisaMercadoUncheckedUpdateInput>
    /**
     * Choose, which PesquisaMercado to update.
     */
    where: PesquisaMercadoWhereUniqueInput
  }

  /**
   * PesquisaMercado updateMany
   */
  export type PesquisaMercadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PesquisaMercados.
     */
    data: XOR<PesquisaMercadoUpdateManyMutationInput, PesquisaMercadoUncheckedUpdateManyInput>
    /**
     * Filter which PesquisaMercados to update
     */
    where?: PesquisaMercadoWhereInput
    /**
     * Limit how many PesquisaMercados to update.
     */
    limit?: number
  }

  /**
   * PesquisaMercado updateManyAndReturn
   */
  export type PesquisaMercadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * The data used to update PesquisaMercados.
     */
    data: XOR<PesquisaMercadoUpdateManyMutationInput, PesquisaMercadoUncheckedUpdateManyInput>
    /**
     * Filter which PesquisaMercados to update
     */
    where?: PesquisaMercadoWhereInput
    /**
     * Limit how many PesquisaMercados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PesquisaMercado upsert
   */
  export type PesquisaMercadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    /**
     * The filter to search for the PesquisaMercado to update in case it exists.
     */
    where: PesquisaMercadoWhereUniqueInput
    /**
     * In case the PesquisaMercado found by the `where` argument doesn't exist, create a new PesquisaMercado with this data.
     */
    create: XOR<PesquisaMercadoCreateInput, PesquisaMercadoUncheckedCreateInput>
    /**
     * In case the PesquisaMercado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesquisaMercadoUpdateInput, PesquisaMercadoUncheckedUpdateInput>
  }

  /**
   * PesquisaMercado delete
   */
  export type PesquisaMercadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
    /**
     * Filter which PesquisaMercado to delete.
     */
    where: PesquisaMercadoWhereUniqueInput
  }

  /**
   * PesquisaMercado deleteMany
   */
  export type PesquisaMercadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PesquisaMercados to delete
     */
    where?: PesquisaMercadoWhereInput
    /**
     * Limit how many PesquisaMercados to delete.
     */
    limit?: number
  }

  /**
   * PesquisaMercado.competidores
   */
  export type PesquisaMercado$competidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    where?: CompetidorWhereInput
    orderBy?: CompetidorOrderByWithRelationInput | CompetidorOrderByWithRelationInput[]
    cursor?: CompetidorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetidorScalarFieldEnum | CompetidorScalarFieldEnum[]
  }

  /**
   * PesquisaMercado without action
   */
  export type PesquisaMercadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesquisaMercado
     */
    select?: PesquisaMercadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesquisaMercado
     */
    omit?: PesquisaMercadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesquisaMercadoInclude<ExtArgs> | null
  }


  /**
   * Model Competidor
   */

  export type AggregateCompetidor = {
    _count: CompetidorCountAggregateOutputType | null
    _avg: CompetidorAvgAggregateOutputType | null
    _sum: CompetidorSumAggregateOutputType | null
    _min: CompetidorMinAggregateOutputType | null
    _max: CompetidorMaxAggregateOutputType | null
  }

  export type CompetidorAvgAggregateOutputType = {
    nota: number | null
  }

  export type CompetidorSumAggregateOutputType = {
    nota: number | null
  }

  export type CompetidorMinAggregateOutputType = {
    id: string | null
    googleId: string | null
    nome: string | null
    nota: number | null
    estilo: string | null
    pesquisaId: string | null
  }

  export type CompetidorMaxAggregateOutputType = {
    id: string | null
    googleId: string | null
    nome: string | null
    nota: number | null
    estilo: string | null
    pesquisaId: string | null
  }

  export type CompetidorCountAggregateOutputType = {
    id: number
    googleId: number
    nome: number
    nota: number
    estilo: number
    pesquisaId: number
    _all: number
  }


  export type CompetidorAvgAggregateInputType = {
    nota?: true
  }

  export type CompetidorSumAggregateInputType = {
    nota?: true
  }

  export type CompetidorMinAggregateInputType = {
    id?: true
    googleId?: true
    nome?: true
    nota?: true
    estilo?: true
    pesquisaId?: true
  }

  export type CompetidorMaxAggregateInputType = {
    id?: true
    googleId?: true
    nome?: true
    nota?: true
    estilo?: true
    pesquisaId?: true
  }

  export type CompetidorCountAggregateInputType = {
    id?: true
    googleId?: true
    nome?: true
    nota?: true
    estilo?: true
    pesquisaId?: true
    _all?: true
  }

  export type CompetidorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competidor to aggregate.
     */
    where?: CompetidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competidors to fetch.
     */
    orderBy?: CompetidorOrderByWithRelationInput | CompetidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competidors
    **/
    _count?: true | CompetidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetidorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetidorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetidorMaxAggregateInputType
  }

  export type GetCompetidorAggregateType<T extends CompetidorAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetidor[P]>
      : GetScalarType<T[P], AggregateCompetidor[P]>
  }




  export type CompetidorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetidorWhereInput
    orderBy?: CompetidorOrderByWithAggregationInput | CompetidorOrderByWithAggregationInput[]
    by: CompetidorScalarFieldEnum[] | CompetidorScalarFieldEnum
    having?: CompetidorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetidorCountAggregateInputType | true
    _avg?: CompetidorAvgAggregateInputType
    _sum?: CompetidorSumAggregateInputType
    _min?: CompetidorMinAggregateInputType
    _max?: CompetidorMaxAggregateInputType
  }

  export type CompetidorGroupByOutputType = {
    id: string
    googleId: string
    nome: string
    nota: number | null
    estilo: string | null
    pesquisaId: string
    _count: CompetidorCountAggregateOutputType | null
    _avg: CompetidorAvgAggregateOutputType | null
    _sum: CompetidorSumAggregateOutputType | null
    _min: CompetidorMinAggregateOutputType | null
    _max: CompetidorMaxAggregateOutputType | null
  }

  type GetCompetidorGroupByPayload<T extends CompetidorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetidorGroupByOutputType[P]>
            : GetScalarType<T[P], CompetidorGroupByOutputType[P]>
        }
      >
    >


  export type CompetidorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    nome?: boolean
    nota?: boolean
    estilo?: boolean
    pesquisaId?: boolean
    itensCardapio?: boolean | Competidor$itensCardapioArgs<ExtArgs>
    pesquisa?: boolean | PesquisaMercadoDefaultArgs<ExtArgs>
    _count?: boolean | CompetidorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competidor"]>

  export type CompetidorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    nome?: boolean
    nota?: boolean
    estilo?: boolean
    pesquisaId?: boolean
    pesquisa?: boolean | PesquisaMercadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competidor"]>

  export type CompetidorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    nome?: boolean
    nota?: boolean
    estilo?: boolean
    pesquisaId?: boolean
    pesquisa?: boolean | PesquisaMercadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competidor"]>

  export type CompetidorSelectScalar = {
    id?: boolean
    googleId?: boolean
    nome?: boolean
    nota?: boolean
    estilo?: boolean
    pesquisaId?: boolean
  }

  export type CompetidorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleId" | "nome" | "nota" | "estilo" | "pesquisaId", ExtArgs["result"]["competidor"]>
  export type CompetidorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensCardapio?: boolean | Competidor$itensCardapioArgs<ExtArgs>
    pesquisa?: boolean | PesquisaMercadoDefaultArgs<ExtArgs>
    _count?: boolean | CompetidorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetidorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesquisa?: boolean | PesquisaMercadoDefaultArgs<ExtArgs>
  }
  export type CompetidorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesquisa?: boolean | PesquisaMercadoDefaultArgs<ExtArgs>
  }

  export type $CompetidorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competidor"
    objects: {
      itensCardapio: Prisma.$ItemCardapioPayload<ExtArgs>[]
      pesquisa: Prisma.$PesquisaMercadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleId: string
      nome: string
      nota: number | null
      estilo: string | null
      pesquisaId: string
    }, ExtArgs["result"]["competidor"]>
    composites: {}
  }

  type CompetidorGetPayload<S extends boolean | null | undefined | CompetidorDefaultArgs> = $Result.GetResult<Prisma.$CompetidorPayload, S>

  type CompetidorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetidorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetidorCountAggregateInputType | true
    }

  export interface CompetidorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competidor'], meta: { name: 'Competidor' } }
    /**
     * Find zero or one Competidor that matches the filter.
     * @param {CompetidorFindUniqueArgs} args - Arguments to find a Competidor
     * @example
     * // Get one Competidor
     * const competidor = await prisma.competidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetidorFindUniqueArgs>(args: SelectSubset<T, CompetidorFindUniqueArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competidor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetidorFindUniqueOrThrowArgs} args - Arguments to find a Competidor
     * @example
     * // Get one Competidor
     * const competidor = await prisma.competidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetidorFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetidorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorFindFirstArgs} args - Arguments to find a Competidor
     * @example
     * // Get one Competidor
     * const competidor = await prisma.competidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetidorFindFirstArgs>(args?: SelectSubset<T, CompetidorFindFirstArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorFindFirstOrThrowArgs} args - Arguments to find a Competidor
     * @example
     * // Get one Competidor
     * const competidor = await prisma.competidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetidorFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetidorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competidors
     * const competidors = await prisma.competidor.findMany()
     * 
     * // Get first 10 Competidors
     * const competidors = await prisma.competidor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competidorWithIdOnly = await prisma.competidor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetidorFindManyArgs>(args?: SelectSubset<T, CompetidorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competidor.
     * @param {CompetidorCreateArgs} args - Arguments to create a Competidor.
     * @example
     * // Create one Competidor
     * const Competidor = await prisma.competidor.create({
     *   data: {
     *     // ... data to create a Competidor
     *   }
     * })
     * 
     */
    create<T extends CompetidorCreateArgs>(args: SelectSubset<T, CompetidorCreateArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competidors.
     * @param {CompetidorCreateManyArgs} args - Arguments to create many Competidors.
     * @example
     * // Create many Competidors
     * const competidor = await prisma.competidor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetidorCreateManyArgs>(args?: SelectSubset<T, CompetidorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competidors and returns the data saved in the database.
     * @param {CompetidorCreateManyAndReturnArgs} args - Arguments to create many Competidors.
     * @example
     * // Create many Competidors
     * const competidor = await prisma.competidor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competidors and only return the `id`
     * const competidorWithIdOnly = await prisma.competidor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetidorCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetidorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competidor.
     * @param {CompetidorDeleteArgs} args - Arguments to delete one Competidor.
     * @example
     * // Delete one Competidor
     * const Competidor = await prisma.competidor.delete({
     *   where: {
     *     // ... filter to delete one Competidor
     *   }
     * })
     * 
     */
    delete<T extends CompetidorDeleteArgs>(args: SelectSubset<T, CompetidorDeleteArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competidor.
     * @param {CompetidorUpdateArgs} args - Arguments to update one Competidor.
     * @example
     * // Update one Competidor
     * const competidor = await prisma.competidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetidorUpdateArgs>(args: SelectSubset<T, CompetidorUpdateArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competidors.
     * @param {CompetidorDeleteManyArgs} args - Arguments to filter Competidors to delete.
     * @example
     * // Delete a few Competidors
     * const { count } = await prisma.competidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetidorDeleteManyArgs>(args?: SelectSubset<T, CompetidorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competidors
     * const competidor = await prisma.competidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetidorUpdateManyArgs>(args: SelectSubset<T, CompetidorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competidors and returns the data updated in the database.
     * @param {CompetidorUpdateManyAndReturnArgs} args - Arguments to update many Competidors.
     * @example
     * // Update many Competidors
     * const competidor = await prisma.competidor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competidors and only return the `id`
     * const competidorWithIdOnly = await prisma.competidor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompetidorUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetidorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competidor.
     * @param {CompetidorUpsertArgs} args - Arguments to update or create a Competidor.
     * @example
     * // Update or create a Competidor
     * const competidor = await prisma.competidor.upsert({
     *   create: {
     *     // ... data to create a Competidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competidor we want to update
     *   }
     * })
     */
    upsert<T extends CompetidorUpsertArgs>(args: SelectSubset<T, CompetidorUpsertArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorCountArgs} args - Arguments to filter Competidors to count.
     * @example
     * // Count the number of Competidors
     * const count = await prisma.competidor.count({
     *   where: {
     *     // ... the filter for the Competidors we want to count
     *   }
     * })
    **/
    count<T extends CompetidorCountArgs>(
      args?: Subset<T, CompetidorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetidorAggregateArgs>(args: Subset<T, CompetidorAggregateArgs>): Prisma.PrismaPromise<GetCompetidorAggregateType<T>>

    /**
     * Group by Competidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetidorGroupByArgs} args - Group by arguments.
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
      T extends CompetidorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetidorGroupByArgs['orderBy'] }
        : { orderBy?: CompetidorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competidor model
   */
  readonly fields: CompetidorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competidor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetidorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itensCardapio<T extends Competidor$itensCardapioArgs<ExtArgs> = {}>(args?: Subset<T, Competidor$itensCardapioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pesquisa<T extends PesquisaMercadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PesquisaMercadoDefaultArgs<ExtArgs>>): Prisma__PesquisaMercadoClient<$Result.GetResult<Prisma.$PesquisaMercadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Competidor model
   */
  interface CompetidorFieldRefs {
    readonly id: FieldRef<"Competidor", 'String'>
    readonly googleId: FieldRef<"Competidor", 'String'>
    readonly nome: FieldRef<"Competidor", 'String'>
    readonly nota: FieldRef<"Competidor", 'Float'>
    readonly estilo: FieldRef<"Competidor", 'String'>
    readonly pesquisaId: FieldRef<"Competidor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Competidor findUnique
   */
  export type CompetidorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidor to fetch.
     */
    where: CompetidorWhereUniqueInput
  }

  /**
   * Competidor findUniqueOrThrow
   */
  export type CompetidorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidor to fetch.
     */
    where: CompetidorWhereUniqueInput
  }

  /**
   * Competidor findFirst
   */
  export type CompetidorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidor to fetch.
     */
    where?: CompetidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competidors to fetch.
     */
    orderBy?: CompetidorOrderByWithRelationInput | CompetidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competidors.
     */
    cursor?: CompetidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competidors.
     */
    distinct?: CompetidorScalarFieldEnum | CompetidorScalarFieldEnum[]
  }

  /**
   * Competidor findFirstOrThrow
   */
  export type CompetidorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidor to fetch.
     */
    where?: CompetidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competidors to fetch.
     */
    orderBy?: CompetidorOrderByWithRelationInput | CompetidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competidors.
     */
    cursor?: CompetidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competidors.
     */
    distinct?: CompetidorScalarFieldEnum | CompetidorScalarFieldEnum[]
  }

  /**
   * Competidor findMany
   */
  export type CompetidorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter, which Competidors to fetch.
     */
    where?: CompetidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competidors to fetch.
     */
    orderBy?: CompetidorOrderByWithRelationInput | CompetidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competidors.
     */
    cursor?: CompetidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competidors.
     */
    skip?: number
    distinct?: CompetidorScalarFieldEnum | CompetidorScalarFieldEnum[]
  }

  /**
   * Competidor create
   */
  export type CompetidorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * The data needed to create a Competidor.
     */
    data: XOR<CompetidorCreateInput, CompetidorUncheckedCreateInput>
  }

  /**
   * Competidor createMany
   */
  export type CompetidorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competidors.
     */
    data: CompetidorCreateManyInput | CompetidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competidor createManyAndReturn
   */
  export type CompetidorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * The data used to create many Competidors.
     */
    data: CompetidorCreateManyInput | CompetidorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competidor update
   */
  export type CompetidorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * The data needed to update a Competidor.
     */
    data: XOR<CompetidorUpdateInput, CompetidorUncheckedUpdateInput>
    /**
     * Choose, which Competidor to update.
     */
    where: CompetidorWhereUniqueInput
  }

  /**
   * Competidor updateMany
   */
  export type CompetidorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competidors.
     */
    data: XOR<CompetidorUpdateManyMutationInput, CompetidorUncheckedUpdateManyInput>
    /**
     * Filter which Competidors to update
     */
    where?: CompetidorWhereInput
    /**
     * Limit how many Competidors to update.
     */
    limit?: number
  }

  /**
   * Competidor updateManyAndReturn
   */
  export type CompetidorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * The data used to update Competidors.
     */
    data: XOR<CompetidorUpdateManyMutationInput, CompetidorUncheckedUpdateManyInput>
    /**
     * Filter which Competidors to update
     */
    where?: CompetidorWhereInput
    /**
     * Limit how many Competidors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competidor upsert
   */
  export type CompetidorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * The filter to search for the Competidor to update in case it exists.
     */
    where: CompetidorWhereUniqueInput
    /**
     * In case the Competidor found by the `where` argument doesn't exist, create a new Competidor with this data.
     */
    create: XOR<CompetidorCreateInput, CompetidorUncheckedCreateInput>
    /**
     * In case the Competidor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetidorUpdateInput, CompetidorUncheckedUpdateInput>
  }

  /**
   * Competidor delete
   */
  export type CompetidorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
    /**
     * Filter which Competidor to delete.
     */
    where: CompetidorWhereUniqueInput
  }

  /**
   * Competidor deleteMany
   */
  export type CompetidorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competidors to delete
     */
    where?: CompetidorWhereInput
    /**
     * Limit how many Competidors to delete.
     */
    limit?: number
  }

  /**
   * Competidor.itensCardapio
   */
  export type Competidor$itensCardapioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    where?: ItemCardapioWhereInput
    orderBy?: ItemCardapioOrderByWithRelationInput | ItemCardapioOrderByWithRelationInput[]
    cursor?: ItemCardapioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemCardapioScalarFieldEnum | ItemCardapioScalarFieldEnum[]
  }

  /**
   * Competidor without action
   */
  export type CompetidorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competidor
     */
    select?: CompetidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competidor
     */
    omit?: CompetidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetidorInclude<ExtArgs> | null
  }


  /**
   * Model ItemCardapio
   */

  export type AggregateItemCardapio = {
    _count: ItemCardapioCountAggregateOutputType | null
    _avg: ItemCardapioAvgAggregateOutputType | null
    _sum: ItemCardapioSumAggregateOutputType | null
    _min: ItemCardapioMinAggregateOutputType | null
    _max: ItemCardapioMaxAggregateOutputType | null
  }

  export type ItemCardapioAvgAggregateOutputType = {
    preco: number | null
  }

  export type ItemCardapioSumAggregateOutputType = {
    preco: number | null
  }

  export type ItemCardapioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    preco: number | null
    categoria: string | null
    competidorId: string | null
  }

  export type ItemCardapioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    preco: number | null
    categoria: string | null
    competidorId: string | null
  }

  export type ItemCardapioCountAggregateOutputType = {
    id: number
    nome: number
    preco: number
    categoria: number
    competidorId: number
    _all: number
  }


  export type ItemCardapioAvgAggregateInputType = {
    preco?: true
  }

  export type ItemCardapioSumAggregateInputType = {
    preco?: true
  }

  export type ItemCardapioMinAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    categoria?: true
    competidorId?: true
  }

  export type ItemCardapioMaxAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    categoria?: true
    competidorId?: true
  }

  export type ItemCardapioCountAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    categoria?: true
    competidorId?: true
    _all?: true
  }

  export type ItemCardapioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCardapio to aggregate.
     */
    where?: ItemCardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCardapios to fetch.
     */
    orderBy?: ItemCardapioOrderByWithRelationInput | ItemCardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemCardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemCardapios
    **/
    _count?: true | ItemCardapioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemCardapioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemCardapioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemCardapioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemCardapioMaxAggregateInputType
  }

  export type GetItemCardapioAggregateType<T extends ItemCardapioAggregateArgs> = {
        [P in keyof T & keyof AggregateItemCardapio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemCardapio[P]>
      : GetScalarType<T[P], AggregateItemCardapio[P]>
  }




  export type ItemCardapioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCardapioWhereInput
    orderBy?: ItemCardapioOrderByWithAggregationInput | ItemCardapioOrderByWithAggregationInput[]
    by: ItemCardapioScalarFieldEnum[] | ItemCardapioScalarFieldEnum
    having?: ItemCardapioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCardapioCountAggregateInputType | true
    _avg?: ItemCardapioAvgAggregateInputType
    _sum?: ItemCardapioSumAggregateInputType
    _min?: ItemCardapioMinAggregateInputType
    _max?: ItemCardapioMaxAggregateInputType
  }

  export type ItemCardapioGroupByOutputType = {
    id: string
    nome: string
    preco: number | null
    categoria: string | null
    competidorId: string
    _count: ItemCardapioCountAggregateOutputType | null
    _avg: ItemCardapioAvgAggregateOutputType | null
    _sum: ItemCardapioSumAggregateOutputType | null
    _min: ItemCardapioMinAggregateOutputType | null
    _max: ItemCardapioMaxAggregateOutputType | null
  }

  type GetItemCardapioGroupByPayload<T extends ItemCardapioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemCardapioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemCardapioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemCardapioGroupByOutputType[P]>
            : GetScalarType<T[P], ItemCardapioGroupByOutputType[P]>
        }
      >
    >


  export type ItemCardapioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    categoria?: boolean
    competidorId?: boolean
    competidor?: boolean | CompetidorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCardapio"]>

  export type ItemCardapioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    categoria?: boolean
    competidorId?: boolean
    competidor?: boolean | CompetidorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCardapio"]>

  export type ItemCardapioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    categoria?: boolean
    competidorId?: boolean
    competidor?: boolean | CompetidorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCardapio"]>

  export type ItemCardapioSelectScalar = {
    id?: boolean
    nome?: boolean
    preco?: boolean
    categoria?: boolean
    competidorId?: boolean
  }

  export type ItemCardapioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "preco" | "categoria" | "competidorId", ExtArgs["result"]["itemCardapio"]>
  export type ItemCardapioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competidor?: boolean | CompetidorDefaultArgs<ExtArgs>
  }
  export type ItemCardapioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competidor?: boolean | CompetidorDefaultArgs<ExtArgs>
  }
  export type ItemCardapioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competidor?: boolean | CompetidorDefaultArgs<ExtArgs>
  }

  export type $ItemCardapioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemCardapio"
    objects: {
      competidor: Prisma.$CompetidorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      preco: number | null
      categoria: string | null
      competidorId: string
    }, ExtArgs["result"]["itemCardapio"]>
    composites: {}
  }

  type ItemCardapioGetPayload<S extends boolean | null | undefined | ItemCardapioDefaultArgs> = $Result.GetResult<Prisma.$ItemCardapioPayload, S>

  type ItemCardapioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemCardapioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCardapioCountAggregateInputType | true
    }

  export interface ItemCardapioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemCardapio'], meta: { name: 'ItemCardapio' } }
    /**
     * Find zero or one ItemCardapio that matches the filter.
     * @param {ItemCardapioFindUniqueArgs} args - Arguments to find a ItemCardapio
     * @example
     * // Get one ItemCardapio
     * const itemCardapio = await prisma.itemCardapio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemCardapioFindUniqueArgs>(args: SelectSubset<T, ItemCardapioFindUniqueArgs<ExtArgs>>): Prisma__ItemCardapioClient<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemCardapio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemCardapioFindUniqueOrThrowArgs} args - Arguments to find a ItemCardapio
     * @example
     * // Get one ItemCardapio
     * const itemCardapio = await prisma.itemCardapio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemCardapioFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemCardapioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemCardapioClient<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCardapio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCardapioFindFirstArgs} args - Arguments to find a ItemCardapio
     * @example
     * // Get one ItemCardapio
     * const itemCardapio = await prisma.itemCardapio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemCardapioFindFirstArgs>(args?: SelectSubset<T, ItemCardapioFindFirstArgs<ExtArgs>>): Prisma__ItemCardapioClient<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCardapio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCardapioFindFirstOrThrowArgs} args - Arguments to find a ItemCardapio
     * @example
     * // Get one ItemCardapio
     * const itemCardapio = await prisma.itemCardapio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemCardapioFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemCardapioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemCardapioClient<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemCardapios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCardapioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemCardapios
     * const itemCardapios = await prisma.itemCardapio.findMany()
     * 
     * // Get first 10 ItemCardapios
     * const itemCardapios = await prisma.itemCardapio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemCardapioWithIdOnly = await prisma.itemCardapio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemCardapioFindManyArgs>(args?: SelectSubset<T, ItemCardapioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemCardapio.
     * @param {ItemCardapioCreateArgs} args - Arguments to create a ItemCardapio.
     * @example
     * // Create one ItemCardapio
     * const ItemCardapio = await prisma.itemCardapio.create({
     *   data: {
     *     // ... data to create a ItemCardapio
     *   }
     * })
     * 
     */
    create<T extends ItemCardapioCreateArgs>(args: SelectSubset<T, ItemCardapioCreateArgs<ExtArgs>>): Prisma__ItemCardapioClient<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemCardapios.
     * @param {ItemCardapioCreateManyArgs} args - Arguments to create many ItemCardapios.
     * @example
     * // Create many ItemCardapios
     * const itemCardapio = await prisma.itemCardapio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCardapioCreateManyArgs>(args?: SelectSubset<T, ItemCardapioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemCardapios and returns the data saved in the database.
     * @param {ItemCardapioCreateManyAndReturnArgs} args - Arguments to create many ItemCardapios.
     * @example
     * // Create many ItemCardapios
     * const itemCardapio = await prisma.itemCardapio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemCardapios and only return the `id`
     * const itemCardapioWithIdOnly = await prisma.itemCardapio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCardapioCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCardapioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemCardapio.
     * @param {ItemCardapioDeleteArgs} args - Arguments to delete one ItemCardapio.
     * @example
     * // Delete one ItemCardapio
     * const ItemCardapio = await prisma.itemCardapio.delete({
     *   where: {
     *     // ... filter to delete one ItemCardapio
     *   }
     * })
     * 
     */
    delete<T extends ItemCardapioDeleteArgs>(args: SelectSubset<T, ItemCardapioDeleteArgs<ExtArgs>>): Prisma__ItemCardapioClient<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemCardapio.
     * @param {ItemCardapioUpdateArgs} args - Arguments to update one ItemCardapio.
     * @example
     * // Update one ItemCardapio
     * const itemCardapio = await prisma.itemCardapio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemCardapioUpdateArgs>(args: SelectSubset<T, ItemCardapioUpdateArgs<ExtArgs>>): Prisma__ItemCardapioClient<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemCardapios.
     * @param {ItemCardapioDeleteManyArgs} args - Arguments to filter ItemCardapios to delete.
     * @example
     * // Delete a few ItemCardapios
     * const { count } = await prisma.itemCardapio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemCardapioDeleteManyArgs>(args?: SelectSubset<T, ItemCardapioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCardapios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCardapioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemCardapios
     * const itemCardapio = await prisma.itemCardapio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemCardapioUpdateManyArgs>(args: SelectSubset<T, ItemCardapioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCardapios and returns the data updated in the database.
     * @param {ItemCardapioUpdateManyAndReturnArgs} args - Arguments to update many ItemCardapios.
     * @example
     * // Update many ItemCardapios
     * const itemCardapio = await prisma.itemCardapio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemCardapios and only return the `id`
     * const itemCardapioWithIdOnly = await prisma.itemCardapio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemCardapioUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemCardapioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemCardapio.
     * @param {ItemCardapioUpsertArgs} args - Arguments to update or create a ItemCardapio.
     * @example
     * // Update or create a ItemCardapio
     * const itemCardapio = await prisma.itemCardapio.upsert({
     *   create: {
     *     // ... data to create a ItemCardapio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemCardapio we want to update
     *   }
     * })
     */
    upsert<T extends ItemCardapioUpsertArgs>(args: SelectSubset<T, ItemCardapioUpsertArgs<ExtArgs>>): Prisma__ItemCardapioClient<$Result.GetResult<Prisma.$ItemCardapioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemCardapios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCardapioCountArgs} args - Arguments to filter ItemCardapios to count.
     * @example
     * // Count the number of ItemCardapios
     * const count = await prisma.itemCardapio.count({
     *   where: {
     *     // ... the filter for the ItemCardapios we want to count
     *   }
     * })
    **/
    count<T extends ItemCardapioCountArgs>(
      args?: Subset<T, ItemCardapioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCardapioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemCardapio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCardapioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemCardapioAggregateArgs>(args: Subset<T, ItemCardapioAggregateArgs>): Prisma.PrismaPromise<GetItemCardapioAggregateType<T>>

    /**
     * Group by ItemCardapio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCardapioGroupByArgs} args - Group by arguments.
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
      T extends ItemCardapioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemCardapioGroupByArgs['orderBy'] }
        : { orderBy?: ItemCardapioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemCardapioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCardapioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemCardapio model
   */
  readonly fields: ItemCardapioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemCardapio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemCardapioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competidor<T extends CompetidorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetidorDefaultArgs<ExtArgs>>): Prisma__CompetidorClient<$Result.GetResult<Prisma.$CompetidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemCardapio model
   */
  interface ItemCardapioFieldRefs {
    readonly id: FieldRef<"ItemCardapio", 'String'>
    readonly nome: FieldRef<"ItemCardapio", 'String'>
    readonly preco: FieldRef<"ItemCardapio", 'Float'>
    readonly categoria: FieldRef<"ItemCardapio", 'String'>
    readonly competidorId: FieldRef<"ItemCardapio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemCardapio findUnique
   */
  export type ItemCardapioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    /**
     * Filter, which ItemCardapio to fetch.
     */
    where: ItemCardapioWhereUniqueInput
  }

  /**
   * ItemCardapio findUniqueOrThrow
   */
  export type ItemCardapioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    /**
     * Filter, which ItemCardapio to fetch.
     */
    where: ItemCardapioWhereUniqueInput
  }

  /**
   * ItemCardapio findFirst
   */
  export type ItemCardapioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    /**
     * Filter, which ItemCardapio to fetch.
     */
    where?: ItemCardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCardapios to fetch.
     */
    orderBy?: ItemCardapioOrderByWithRelationInput | ItemCardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCardapios.
     */
    cursor?: ItemCardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCardapios.
     */
    distinct?: ItemCardapioScalarFieldEnum | ItemCardapioScalarFieldEnum[]
  }

  /**
   * ItemCardapio findFirstOrThrow
   */
  export type ItemCardapioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    /**
     * Filter, which ItemCardapio to fetch.
     */
    where?: ItemCardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCardapios to fetch.
     */
    orderBy?: ItemCardapioOrderByWithRelationInput | ItemCardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCardapios.
     */
    cursor?: ItemCardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCardapios.
     */
    distinct?: ItemCardapioScalarFieldEnum | ItemCardapioScalarFieldEnum[]
  }

  /**
   * ItemCardapio findMany
   */
  export type ItemCardapioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    /**
     * Filter, which ItemCardapios to fetch.
     */
    where?: ItemCardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCardapios to fetch.
     */
    orderBy?: ItemCardapioOrderByWithRelationInput | ItemCardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemCardapios.
     */
    cursor?: ItemCardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCardapios.
     */
    skip?: number
    distinct?: ItemCardapioScalarFieldEnum | ItemCardapioScalarFieldEnum[]
  }

  /**
   * ItemCardapio create
   */
  export type ItemCardapioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemCardapio.
     */
    data: XOR<ItemCardapioCreateInput, ItemCardapioUncheckedCreateInput>
  }

  /**
   * ItemCardapio createMany
   */
  export type ItemCardapioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemCardapios.
     */
    data: ItemCardapioCreateManyInput | ItemCardapioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCardapio createManyAndReturn
   */
  export type ItemCardapioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * The data used to create many ItemCardapios.
     */
    data: ItemCardapioCreateManyInput | ItemCardapioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemCardapio update
   */
  export type ItemCardapioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemCardapio.
     */
    data: XOR<ItemCardapioUpdateInput, ItemCardapioUncheckedUpdateInput>
    /**
     * Choose, which ItemCardapio to update.
     */
    where: ItemCardapioWhereUniqueInput
  }

  /**
   * ItemCardapio updateMany
   */
  export type ItemCardapioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemCardapios.
     */
    data: XOR<ItemCardapioUpdateManyMutationInput, ItemCardapioUncheckedUpdateManyInput>
    /**
     * Filter which ItemCardapios to update
     */
    where?: ItemCardapioWhereInput
    /**
     * Limit how many ItemCardapios to update.
     */
    limit?: number
  }

  /**
   * ItemCardapio updateManyAndReturn
   */
  export type ItemCardapioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * The data used to update ItemCardapios.
     */
    data: XOR<ItemCardapioUpdateManyMutationInput, ItemCardapioUncheckedUpdateManyInput>
    /**
     * Filter which ItemCardapios to update
     */
    where?: ItemCardapioWhereInput
    /**
     * Limit how many ItemCardapios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemCardapio upsert
   */
  export type ItemCardapioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemCardapio to update in case it exists.
     */
    where: ItemCardapioWhereUniqueInput
    /**
     * In case the ItemCardapio found by the `where` argument doesn't exist, create a new ItemCardapio with this data.
     */
    create: XOR<ItemCardapioCreateInput, ItemCardapioUncheckedCreateInput>
    /**
     * In case the ItemCardapio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemCardapioUpdateInput, ItemCardapioUncheckedUpdateInput>
  }

  /**
   * ItemCardapio delete
   */
  export type ItemCardapioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
    /**
     * Filter which ItemCardapio to delete.
     */
    where: ItemCardapioWhereUniqueInput
  }

  /**
   * ItemCardapio deleteMany
   */
  export type ItemCardapioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCardapios to delete
     */
    where?: ItemCardapioWhereInput
    /**
     * Limit how many ItemCardapios to delete.
     */
    limit?: number
  }

  /**
   * ItemCardapio without action
   */
  export type ItemCardapioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCardapio
     */
    select?: ItemCardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCardapio
     */
    omit?: ItemCardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCardapioInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PesquisaMercadoScalarFieldEnum: {
    id: 'id',
    cidade: 'cidade',
    estado: 'estado',
    status: 'status',
    usuarioId: 'usuarioId',
    criadoEm: 'criadoEm'
  };

  export type PesquisaMercadoScalarFieldEnum = (typeof PesquisaMercadoScalarFieldEnum)[keyof typeof PesquisaMercadoScalarFieldEnum]


  export const CompetidorScalarFieldEnum: {
    id: 'id',
    googleId: 'googleId',
    nome: 'nome',
    nota: 'nota',
    estilo: 'estilo',
    pesquisaId: 'pesquisaId'
  };

  export type CompetidorScalarFieldEnum = (typeof CompetidorScalarFieldEnum)[keyof typeof CompetidorScalarFieldEnum]


  export const ItemCardapioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    preco: 'preco',
    categoria: 'categoria',
    competidorId: 'competidorId'
  };

  export type ItemCardapioScalarFieldEnum = (typeof ItemCardapioScalarFieldEnum)[keyof typeof ItemCardapioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    pesquisas?: PesquisaMercadoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    pesquisas?: PesquisaMercadoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    pesquisas?: PesquisaMercadoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
  }

  export type PesquisaMercadoWhereInput = {
    AND?: PesquisaMercadoWhereInput | PesquisaMercadoWhereInput[]
    OR?: PesquisaMercadoWhereInput[]
    NOT?: PesquisaMercadoWhereInput | PesquisaMercadoWhereInput[]
    id?: StringFilter<"PesquisaMercado"> | string
    cidade?: StringFilter<"PesquisaMercado"> | string
    estado?: StringFilter<"PesquisaMercado"> | string
    status?: StringFilter<"PesquisaMercado"> | string
    usuarioId?: StringFilter<"PesquisaMercado"> | string
    criadoEm?: DateTimeFilter<"PesquisaMercado"> | Date | string
    competidores?: CompetidorListRelationFilter
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PesquisaMercadoOrderByWithRelationInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    competidores?: CompetidorOrderByRelationAggregateInput
    usuario?: UserOrderByWithRelationInput
  }

  export type PesquisaMercadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PesquisaMercadoWhereInput | PesquisaMercadoWhereInput[]
    OR?: PesquisaMercadoWhereInput[]
    NOT?: PesquisaMercadoWhereInput | PesquisaMercadoWhereInput[]
    cidade?: StringFilter<"PesquisaMercado"> | string
    estado?: StringFilter<"PesquisaMercado"> | string
    status?: StringFilter<"PesquisaMercado"> | string
    usuarioId?: StringFilter<"PesquisaMercado"> | string
    criadoEm?: DateTimeFilter<"PesquisaMercado"> | Date | string
    competidores?: CompetidorListRelationFilter
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PesquisaMercadoOrderByWithAggregationInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    _count?: PesquisaMercadoCountOrderByAggregateInput
    _max?: PesquisaMercadoMaxOrderByAggregateInput
    _min?: PesquisaMercadoMinOrderByAggregateInput
  }

  export type PesquisaMercadoScalarWhereWithAggregatesInput = {
    AND?: PesquisaMercadoScalarWhereWithAggregatesInput | PesquisaMercadoScalarWhereWithAggregatesInput[]
    OR?: PesquisaMercadoScalarWhereWithAggregatesInput[]
    NOT?: PesquisaMercadoScalarWhereWithAggregatesInput | PesquisaMercadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PesquisaMercado"> | string
    cidade?: StringWithAggregatesFilter<"PesquisaMercado"> | string
    estado?: StringWithAggregatesFilter<"PesquisaMercado"> | string
    status?: StringWithAggregatesFilter<"PesquisaMercado"> | string
    usuarioId?: StringWithAggregatesFilter<"PesquisaMercado"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"PesquisaMercado"> | Date | string
  }

  export type CompetidorWhereInput = {
    AND?: CompetidorWhereInput | CompetidorWhereInput[]
    OR?: CompetidorWhereInput[]
    NOT?: CompetidorWhereInput | CompetidorWhereInput[]
    id?: StringFilter<"Competidor"> | string
    googleId?: StringFilter<"Competidor"> | string
    nome?: StringFilter<"Competidor"> | string
    nota?: FloatNullableFilter<"Competidor"> | number | null
    estilo?: StringNullableFilter<"Competidor"> | string | null
    pesquisaId?: StringFilter<"Competidor"> | string
    itensCardapio?: ItemCardapioListRelationFilter
    pesquisa?: XOR<PesquisaMercadoScalarRelationFilter, PesquisaMercadoWhereInput>
  }

  export type CompetidorOrderByWithRelationInput = {
    id?: SortOrder
    googleId?: SortOrder
    nome?: SortOrder
    nota?: SortOrderInput | SortOrder
    estilo?: SortOrderInput | SortOrder
    pesquisaId?: SortOrder
    itensCardapio?: ItemCardapioOrderByRelationAggregateInput
    pesquisa?: PesquisaMercadoOrderByWithRelationInput
  }

  export type CompetidorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleId?: string
    AND?: CompetidorWhereInput | CompetidorWhereInput[]
    OR?: CompetidorWhereInput[]
    NOT?: CompetidorWhereInput | CompetidorWhereInput[]
    nome?: StringFilter<"Competidor"> | string
    nota?: FloatNullableFilter<"Competidor"> | number | null
    estilo?: StringNullableFilter<"Competidor"> | string | null
    pesquisaId?: StringFilter<"Competidor"> | string
    itensCardapio?: ItemCardapioListRelationFilter
    pesquisa?: XOR<PesquisaMercadoScalarRelationFilter, PesquisaMercadoWhereInput>
  }, "id" | "googleId">

  export type CompetidorOrderByWithAggregationInput = {
    id?: SortOrder
    googleId?: SortOrder
    nome?: SortOrder
    nota?: SortOrderInput | SortOrder
    estilo?: SortOrderInput | SortOrder
    pesquisaId?: SortOrder
    _count?: CompetidorCountOrderByAggregateInput
    _avg?: CompetidorAvgOrderByAggregateInput
    _max?: CompetidorMaxOrderByAggregateInput
    _min?: CompetidorMinOrderByAggregateInput
    _sum?: CompetidorSumOrderByAggregateInput
  }

  export type CompetidorScalarWhereWithAggregatesInput = {
    AND?: CompetidorScalarWhereWithAggregatesInput | CompetidorScalarWhereWithAggregatesInput[]
    OR?: CompetidorScalarWhereWithAggregatesInput[]
    NOT?: CompetidorScalarWhereWithAggregatesInput | CompetidorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competidor"> | string
    googleId?: StringWithAggregatesFilter<"Competidor"> | string
    nome?: StringWithAggregatesFilter<"Competidor"> | string
    nota?: FloatNullableWithAggregatesFilter<"Competidor"> | number | null
    estilo?: StringNullableWithAggregatesFilter<"Competidor"> | string | null
    pesquisaId?: StringWithAggregatesFilter<"Competidor"> | string
  }

  export type ItemCardapioWhereInput = {
    AND?: ItemCardapioWhereInput | ItemCardapioWhereInput[]
    OR?: ItemCardapioWhereInput[]
    NOT?: ItemCardapioWhereInput | ItemCardapioWhereInput[]
    id?: StringFilter<"ItemCardapio"> | string
    nome?: StringFilter<"ItemCardapio"> | string
    preco?: FloatNullableFilter<"ItemCardapio"> | number | null
    categoria?: StringNullableFilter<"ItemCardapio"> | string | null
    competidorId?: StringFilter<"ItemCardapio"> | string
    competidor?: XOR<CompetidorScalarRelationFilter, CompetidorWhereInput>
  }

  export type ItemCardapioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    competidorId?: SortOrder
    competidor?: CompetidorOrderByWithRelationInput
  }

  export type ItemCardapioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemCardapioWhereInput | ItemCardapioWhereInput[]
    OR?: ItemCardapioWhereInput[]
    NOT?: ItemCardapioWhereInput | ItemCardapioWhereInput[]
    nome?: StringFilter<"ItemCardapio"> | string
    preco?: FloatNullableFilter<"ItemCardapio"> | number | null
    categoria?: StringNullableFilter<"ItemCardapio"> | string | null
    competidorId?: StringFilter<"ItemCardapio"> | string
    competidor?: XOR<CompetidorScalarRelationFilter, CompetidorWhereInput>
  }, "id">

  export type ItemCardapioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    competidorId?: SortOrder
    _count?: ItemCardapioCountOrderByAggregateInput
    _avg?: ItemCardapioAvgOrderByAggregateInput
    _max?: ItemCardapioMaxOrderByAggregateInput
    _min?: ItemCardapioMinOrderByAggregateInput
    _sum?: ItemCardapioSumOrderByAggregateInput
  }

  export type ItemCardapioScalarWhereWithAggregatesInput = {
    AND?: ItemCardapioScalarWhereWithAggregatesInput | ItemCardapioScalarWhereWithAggregatesInput[]
    OR?: ItemCardapioScalarWhereWithAggregatesInput[]
    NOT?: ItemCardapioScalarWhereWithAggregatesInput | ItemCardapioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemCardapio"> | string
    nome?: StringWithAggregatesFilter<"ItemCardapio"> | string
    preco?: FloatNullableWithAggregatesFilter<"ItemCardapio"> | number | null
    categoria?: StringNullableWithAggregatesFilter<"ItemCardapio"> | string | null
    competidorId?: StringWithAggregatesFilter<"ItemCardapio"> | string
  }

  export type UserCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    pesquisas?: PesquisaMercadoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    pesquisas?: PesquisaMercadoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    pesquisas?: PesquisaMercadoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    pesquisas?: PesquisaMercadoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type PesquisaMercadoCreateInput = {
    id?: string
    cidade: string
    estado: string
    status?: string
    criadoEm?: Date | string
    competidores?: CompetidorCreateNestedManyWithoutPesquisaInput
    usuario: UserCreateNestedOneWithoutPesquisasInput
  }

  export type PesquisaMercadoUncheckedCreateInput = {
    id?: string
    cidade: string
    estado: string
    status?: string
    usuarioId: string
    criadoEm?: Date | string
    competidores?: CompetidorUncheckedCreateNestedManyWithoutPesquisaInput
  }

  export type PesquisaMercadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    competidores?: CompetidorUpdateManyWithoutPesquisaNestedInput
    usuario?: UserUpdateOneRequiredWithoutPesquisasNestedInput
  }

  export type PesquisaMercadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    competidores?: CompetidorUncheckedUpdateManyWithoutPesquisaNestedInput
  }

  export type PesquisaMercadoCreateManyInput = {
    id?: string
    cidade: string
    estado: string
    status?: string
    usuarioId: string
    criadoEm?: Date | string
  }

  export type PesquisaMercadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesquisaMercadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetidorCreateInput = {
    id?: string
    googleId: string
    nome: string
    nota?: number | null
    estilo?: string | null
    itensCardapio?: ItemCardapioCreateNestedManyWithoutCompetidorInput
    pesquisa: PesquisaMercadoCreateNestedOneWithoutCompetidoresInput
  }

  export type CompetidorUncheckedCreateInput = {
    id?: string
    googleId: string
    nome: string
    nota?: number | null
    estilo?: string | null
    pesquisaId: string
    itensCardapio?: ItemCardapioUncheckedCreateNestedManyWithoutCompetidorInput
  }

  export type CompetidorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    estilo?: NullableStringFieldUpdateOperationsInput | string | null
    itensCardapio?: ItemCardapioUpdateManyWithoutCompetidorNestedInput
    pesquisa?: PesquisaMercadoUpdateOneRequiredWithoutCompetidoresNestedInput
  }

  export type CompetidorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    estilo?: NullableStringFieldUpdateOperationsInput | string | null
    pesquisaId?: StringFieldUpdateOperationsInput | string
    itensCardapio?: ItemCardapioUncheckedUpdateManyWithoutCompetidorNestedInput
  }

  export type CompetidorCreateManyInput = {
    id?: string
    googleId: string
    nome: string
    nota?: number | null
    estilo?: string | null
    pesquisaId: string
  }

  export type CompetidorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    estilo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompetidorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    estilo?: NullableStringFieldUpdateOperationsInput | string | null
    pesquisaId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCardapioCreateInput = {
    id?: string
    nome: string
    preco?: number | null
    categoria?: string | null
    competidor: CompetidorCreateNestedOneWithoutItensCardapioInput
  }

  export type ItemCardapioUncheckedCreateInput = {
    id?: string
    nome: string
    preco?: number | null
    categoria?: string | null
    competidorId: string
  }

  export type ItemCardapioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    competidor?: CompetidorUpdateOneRequiredWithoutItensCardapioNestedInput
  }

  export type ItemCardapioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    competidorId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCardapioCreateManyInput = {
    id?: string
    nome: string
    preco?: number | null
    categoria?: string | null
    competidorId: string
  }

  export type ItemCardapioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemCardapioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    competidorId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PesquisaMercadoListRelationFilter = {
    every?: PesquisaMercadoWhereInput
    some?: PesquisaMercadoWhereInput
    none?: PesquisaMercadoWhereInput
  }

  export type PesquisaMercadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompetidorListRelationFilter = {
    every?: CompetidorWhereInput
    some?: CompetidorWhereInput
    none?: CompetidorWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CompetidorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PesquisaMercadoCountOrderByAggregateInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type PesquisaMercadoMaxOrderByAggregateInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type PesquisaMercadoMinOrderByAggregateInput = {
    id?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    status?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ItemCardapioListRelationFilter = {
    every?: ItemCardapioWhereInput
    some?: ItemCardapioWhereInput
    none?: ItemCardapioWhereInput
  }

  export type PesquisaMercadoScalarRelationFilter = {
    is?: PesquisaMercadoWhereInput
    isNot?: PesquisaMercadoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemCardapioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetidorCountOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    nome?: SortOrder
    nota?: SortOrder
    estilo?: SortOrder
    pesquisaId?: SortOrder
  }

  export type CompetidorAvgOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type CompetidorMaxOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    nome?: SortOrder
    nota?: SortOrder
    estilo?: SortOrder
    pesquisaId?: SortOrder
  }

  export type CompetidorMinOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    nome?: SortOrder
    nota?: SortOrder
    estilo?: SortOrder
    pesquisaId?: SortOrder
  }

  export type CompetidorSumOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CompetidorScalarRelationFilter = {
    is?: CompetidorWhereInput
    isNot?: CompetidorWhereInput
  }

  export type ItemCardapioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    competidorId?: SortOrder
  }

  export type ItemCardapioAvgOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type ItemCardapioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    competidorId?: SortOrder
  }

  export type ItemCardapioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    competidorId?: SortOrder
  }

  export type ItemCardapioSumOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type PesquisaMercadoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PesquisaMercadoCreateWithoutUsuarioInput, PesquisaMercadoUncheckedCreateWithoutUsuarioInput> | PesquisaMercadoCreateWithoutUsuarioInput[] | PesquisaMercadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PesquisaMercadoCreateOrConnectWithoutUsuarioInput | PesquisaMercadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PesquisaMercadoCreateManyUsuarioInputEnvelope
    connect?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
  }

  export type PesquisaMercadoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PesquisaMercadoCreateWithoutUsuarioInput, PesquisaMercadoUncheckedCreateWithoutUsuarioInput> | PesquisaMercadoCreateWithoutUsuarioInput[] | PesquisaMercadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PesquisaMercadoCreateOrConnectWithoutUsuarioInput | PesquisaMercadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PesquisaMercadoCreateManyUsuarioInputEnvelope
    connect?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PesquisaMercadoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PesquisaMercadoCreateWithoutUsuarioInput, PesquisaMercadoUncheckedCreateWithoutUsuarioInput> | PesquisaMercadoCreateWithoutUsuarioInput[] | PesquisaMercadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PesquisaMercadoCreateOrConnectWithoutUsuarioInput | PesquisaMercadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PesquisaMercadoUpsertWithWhereUniqueWithoutUsuarioInput | PesquisaMercadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PesquisaMercadoCreateManyUsuarioInputEnvelope
    set?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
    disconnect?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
    delete?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
    connect?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
    update?: PesquisaMercadoUpdateWithWhereUniqueWithoutUsuarioInput | PesquisaMercadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PesquisaMercadoUpdateManyWithWhereWithoutUsuarioInput | PesquisaMercadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PesquisaMercadoScalarWhereInput | PesquisaMercadoScalarWhereInput[]
  }

  export type PesquisaMercadoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PesquisaMercadoCreateWithoutUsuarioInput, PesquisaMercadoUncheckedCreateWithoutUsuarioInput> | PesquisaMercadoCreateWithoutUsuarioInput[] | PesquisaMercadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PesquisaMercadoCreateOrConnectWithoutUsuarioInput | PesquisaMercadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PesquisaMercadoUpsertWithWhereUniqueWithoutUsuarioInput | PesquisaMercadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PesquisaMercadoCreateManyUsuarioInputEnvelope
    set?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
    disconnect?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
    delete?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
    connect?: PesquisaMercadoWhereUniqueInput | PesquisaMercadoWhereUniqueInput[]
    update?: PesquisaMercadoUpdateWithWhereUniqueWithoutUsuarioInput | PesquisaMercadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PesquisaMercadoUpdateManyWithWhereWithoutUsuarioInput | PesquisaMercadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PesquisaMercadoScalarWhereInput | PesquisaMercadoScalarWhereInput[]
  }

  export type CompetidorCreateNestedManyWithoutPesquisaInput = {
    create?: XOR<CompetidorCreateWithoutPesquisaInput, CompetidorUncheckedCreateWithoutPesquisaInput> | CompetidorCreateWithoutPesquisaInput[] | CompetidorUncheckedCreateWithoutPesquisaInput[]
    connectOrCreate?: CompetidorCreateOrConnectWithoutPesquisaInput | CompetidorCreateOrConnectWithoutPesquisaInput[]
    createMany?: CompetidorCreateManyPesquisaInputEnvelope
    connect?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPesquisasInput = {
    create?: XOR<UserCreateWithoutPesquisasInput, UserUncheckedCreateWithoutPesquisasInput>
    connectOrCreate?: UserCreateOrConnectWithoutPesquisasInput
    connect?: UserWhereUniqueInput
  }

  export type CompetidorUncheckedCreateNestedManyWithoutPesquisaInput = {
    create?: XOR<CompetidorCreateWithoutPesquisaInput, CompetidorUncheckedCreateWithoutPesquisaInput> | CompetidorCreateWithoutPesquisaInput[] | CompetidorUncheckedCreateWithoutPesquisaInput[]
    connectOrCreate?: CompetidorCreateOrConnectWithoutPesquisaInput | CompetidorCreateOrConnectWithoutPesquisaInput[]
    createMany?: CompetidorCreateManyPesquisaInputEnvelope
    connect?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompetidorUpdateManyWithoutPesquisaNestedInput = {
    create?: XOR<CompetidorCreateWithoutPesquisaInput, CompetidorUncheckedCreateWithoutPesquisaInput> | CompetidorCreateWithoutPesquisaInput[] | CompetidorUncheckedCreateWithoutPesquisaInput[]
    connectOrCreate?: CompetidorCreateOrConnectWithoutPesquisaInput | CompetidorCreateOrConnectWithoutPesquisaInput[]
    upsert?: CompetidorUpsertWithWhereUniqueWithoutPesquisaInput | CompetidorUpsertWithWhereUniqueWithoutPesquisaInput[]
    createMany?: CompetidorCreateManyPesquisaInputEnvelope
    set?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
    disconnect?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
    delete?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
    connect?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
    update?: CompetidorUpdateWithWhereUniqueWithoutPesquisaInput | CompetidorUpdateWithWhereUniqueWithoutPesquisaInput[]
    updateMany?: CompetidorUpdateManyWithWhereWithoutPesquisaInput | CompetidorUpdateManyWithWhereWithoutPesquisaInput[]
    deleteMany?: CompetidorScalarWhereInput | CompetidorScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPesquisasNestedInput = {
    create?: XOR<UserCreateWithoutPesquisasInput, UserUncheckedCreateWithoutPesquisasInput>
    connectOrCreate?: UserCreateOrConnectWithoutPesquisasInput
    upsert?: UserUpsertWithoutPesquisasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPesquisasInput, UserUpdateWithoutPesquisasInput>, UserUncheckedUpdateWithoutPesquisasInput>
  }

  export type CompetidorUncheckedUpdateManyWithoutPesquisaNestedInput = {
    create?: XOR<CompetidorCreateWithoutPesquisaInput, CompetidorUncheckedCreateWithoutPesquisaInput> | CompetidorCreateWithoutPesquisaInput[] | CompetidorUncheckedCreateWithoutPesquisaInput[]
    connectOrCreate?: CompetidorCreateOrConnectWithoutPesquisaInput | CompetidorCreateOrConnectWithoutPesquisaInput[]
    upsert?: CompetidorUpsertWithWhereUniqueWithoutPesquisaInput | CompetidorUpsertWithWhereUniqueWithoutPesquisaInput[]
    createMany?: CompetidorCreateManyPesquisaInputEnvelope
    set?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
    disconnect?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
    delete?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
    connect?: CompetidorWhereUniqueInput | CompetidorWhereUniqueInput[]
    update?: CompetidorUpdateWithWhereUniqueWithoutPesquisaInput | CompetidorUpdateWithWhereUniqueWithoutPesquisaInput[]
    updateMany?: CompetidorUpdateManyWithWhereWithoutPesquisaInput | CompetidorUpdateManyWithWhereWithoutPesquisaInput[]
    deleteMany?: CompetidorScalarWhereInput | CompetidorScalarWhereInput[]
  }

  export type ItemCardapioCreateNestedManyWithoutCompetidorInput = {
    create?: XOR<ItemCardapioCreateWithoutCompetidorInput, ItemCardapioUncheckedCreateWithoutCompetidorInput> | ItemCardapioCreateWithoutCompetidorInput[] | ItemCardapioUncheckedCreateWithoutCompetidorInput[]
    connectOrCreate?: ItemCardapioCreateOrConnectWithoutCompetidorInput | ItemCardapioCreateOrConnectWithoutCompetidorInput[]
    createMany?: ItemCardapioCreateManyCompetidorInputEnvelope
    connect?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
  }

  export type PesquisaMercadoCreateNestedOneWithoutCompetidoresInput = {
    create?: XOR<PesquisaMercadoCreateWithoutCompetidoresInput, PesquisaMercadoUncheckedCreateWithoutCompetidoresInput>
    connectOrCreate?: PesquisaMercadoCreateOrConnectWithoutCompetidoresInput
    connect?: PesquisaMercadoWhereUniqueInput
  }

  export type ItemCardapioUncheckedCreateNestedManyWithoutCompetidorInput = {
    create?: XOR<ItemCardapioCreateWithoutCompetidorInput, ItemCardapioUncheckedCreateWithoutCompetidorInput> | ItemCardapioCreateWithoutCompetidorInput[] | ItemCardapioUncheckedCreateWithoutCompetidorInput[]
    connectOrCreate?: ItemCardapioCreateOrConnectWithoutCompetidorInput | ItemCardapioCreateOrConnectWithoutCompetidorInput[]
    createMany?: ItemCardapioCreateManyCompetidorInputEnvelope
    connect?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ItemCardapioUpdateManyWithoutCompetidorNestedInput = {
    create?: XOR<ItemCardapioCreateWithoutCompetidorInput, ItemCardapioUncheckedCreateWithoutCompetidorInput> | ItemCardapioCreateWithoutCompetidorInput[] | ItemCardapioUncheckedCreateWithoutCompetidorInput[]
    connectOrCreate?: ItemCardapioCreateOrConnectWithoutCompetidorInput | ItemCardapioCreateOrConnectWithoutCompetidorInput[]
    upsert?: ItemCardapioUpsertWithWhereUniqueWithoutCompetidorInput | ItemCardapioUpsertWithWhereUniqueWithoutCompetidorInput[]
    createMany?: ItemCardapioCreateManyCompetidorInputEnvelope
    set?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
    disconnect?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
    delete?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
    connect?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
    update?: ItemCardapioUpdateWithWhereUniqueWithoutCompetidorInput | ItemCardapioUpdateWithWhereUniqueWithoutCompetidorInput[]
    updateMany?: ItemCardapioUpdateManyWithWhereWithoutCompetidorInput | ItemCardapioUpdateManyWithWhereWithoutCompetidorInput[]
    deleteMany?: ItemCardapioScalarWhereInput | ItemCardapioScalarWhereInput[]
  }

  export type PesquisaMercadoUpdateOneRequiredWithoutCompetidoresNestedInput = {
    create?: XOR<PesquisaMercadoCreateWithoutCompetidoresInput, PesquisaMercadoUncheckedCreateWithoutCompetidoresInput>
    connectOrCreate?: PesquisaMercadoCreateOrConnectWithoutCompetidoresInput
    upsert?: PesquisaMercadoUpsertWithoutCompetidoresInput
    connect?: PesquisaMercadoWhereUniqueInput
    update?: XOR<XOR<PesquisaMercadoUpdateToOneWithWhereWithoutCompetidoresInput, PesquisaMercadoUpdateWithoutCompetidoresInput>, PesquisaMercadoUncheckedUpdateWithoutCompetidoresInput>
  }

  export type ItemCardapioUncheckedUpdateManyWithoutCompetidorNestedInput = {
    create?: XOR<ItemCardapioCreateWithoutCompetidorInput, ItemCardapioUncheckedCreateWithoutCompetidorInput> | ItemCardapioCreateWithoutCompetidorInput[] | ItemCardapioUncheckedCreateWithoutCompetidorInput[]
    connectOrCreate?: ItemCardapioCreateOrConnectWithoutCompetidorInput | ItemCardapioCreateOrConnectWithoutCompetidorInput[]
    upsert?: ItemCardapioUpsertWithWhereUniqueWithoutCompetidorInput | ItemCardapioUpsertWithWhereUniqueWithoutCompetidorInput[]
    createMany?: ItemCardapioCreateManyCompetidorInputEnvelope
    set?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
    disconnect?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
    delete?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
    connect?: ItemCardapioWhereUniqueInput | ItemCardapioWhereUniqueInput[]
    update?: ItemCardapioUpdateWithWhereUniqueWithoutCompetidorInput | ItemCardapioUpdateWithWhereUniqueWithoutCompetidorInput[]
    updateMany?: ItemCardapioUpdateManyWithWhereWithoutCompetidorInput | ItemCardapioUpdateManyWithWhereWithoutCompetidorInput[]
    deleteMany?: ItemCardapioScalarWhereInput | ItemCardapioScalarWhereInput[]
  }

  export type CompetidorCreateNestedOneWithoutItensCardapioInput = {
    create?: XOR<CompetidorCreateWithoutItensCardapioInput, CompetidorUncheckedCreateWithoutItensCardapioInput>
    connectOrCreate?: CompetidorCreateOrConnectWithoutItensCardapioInput
    connect?: CompetidorWhereUniqueInput
  }

  export type CompetidorUpdateOneRequiredWithoutItensCardapioNestedInput = {
    create?: XOR<CompetidorCreateWithoutItensCardapioInput, CompetidorUncheckedCreateWithoutItensCardapioInput>
    connectOrCreate?: CompetidorCreateOrConnectWithoutItensCardapioInput
    upsert?: CompetidorUpsertWithoutItensCardapioInput
    connect?: CompetidorWhereUniqueInput
    update?: XOR<XOR<CompetidorUpdateToOneWithWhereWithoutItensCardapioInput, CompetidorUpdateWithoutItensCardapioInput>, CompetidorUncheckedUpdateWithoutItensCardapioInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PesquisaMercadoCreateWithoutUsuarioInput = {
    id?: string
    cidade: string
    estado: string
    status?: string
    criadoEm?: Date | string
    competidores?: CompetidorCreateNestedManyWithoutPesquisaInput
  }

  export type PesquisaMercadoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    cidade: string
    estado: string
    status?: string
    criadoEm?: Date | string
    competidores?: CompetidorUncheckedCreateNestedManyWithoutPesquisaInput
  }

  export type PesquisaMercadoCreateOrConnectWithoutUsuarioInput = {
    where: PesquisaMercadoWhereUniqueInput
    create: XOR<PesquisaMercadoCreateWithoutUsuarioInput, PesquisaMercadoUncheckedCreateWithoutUsuarioInput>
  }

  export type PesquisaMercadoCreateManyUsuarioInputEnvelope = {
    data: PesquisaMercadoCreateManyUsuarioInput | PesquisaMercadoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PesquisaMercadoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PesquisaMercadoWhereUniqueInput
    update: XOR<PesquisaMercadoUpdateWithoutUsuarioInput, PesquisaMercadoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PesquisaMercadoCreateWithoutUsuarioInput, PesquisaMercadoUncheckedCreateWithoutUsuarioInput>
  }

  export type PesquisaMercadoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PesquisaMercadoWhereUniqueInput
    data: XOR<PesquisaMercadoUpdateWithoutUsuarioInput, PesquisaMercadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PesquisaMercadoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PesquisaMercadoScalarWhereInput
    data: XOR<PesquisaMercadoUpdateManyMutationInput, PesquisaMercadoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PesquisaMercadoScalarWhereInput = {
    AND?: PesquisaMercadoScalarWhereInput | PesquisaMercadoScalarWhereInput[]
    OR?: PesquisaMercadoScalarWhereInput[]
    NOT?: PesquisaMercadoScalarWhereInput | PesquisaMercadoScalarWhereInput[]
    id?: StringFilter<"PesquisaMercado"> | string
    cidade?: StringFilter<"PesquisaMercado"> | string
    estado?: StringFilter<"PesquisaMercado"> | string
    status?: StringFilter<"PesquisaMercado"> | string
    usuarioId?: StringFilter<"PesquisaMercado"> | string
    criadoEm?: DateTimeFilter<"PesquisaMercado"> | Date | string
  }

  export type CompetidorCreateWithoutPesquisaInput = {
    id?: string
    googleId: string
    nome: string
    nota?: number | null
    estilo?: string | null
    itensCardapio?: ItemCardapioCreateNestedManyWithoutCompetidorInput
  }

  export type CompetidorUncheckedCreateWithoutPesquisaInput = {
    id?: string
    googleId: string
    nome: string
    nota?: number | null
    estilo?: string | null
    itensCardapio?: ItemCardapioUncheckedCreateNestedManyWithoutCompetidorInput
  }

  export type CompetidorCreateOrConnectWithoutPesquisaInput = {
    where: CompetidorWhereUniqueInput
    create: XOR<CompetidorCreateWithoutPesquisaInput, CompetidorUncheckedCreateWithoutPesquisaInput>
  }

  export type CompetidorCreateManyPesquisaInputEnvelope = {
    data: CompetidorCreateManyPesquisaInput | CompetidorCreateManyPesquisaInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPesquisasInput = {
    id?: string
    nome: string
    email: string
    senha: string
  }

  export type UserUncheckedCreateWithoutPesquisasInput = {
    id?: string
    nome: string
    email: string
    senha: string
  }

  export type UserCreateOrConnectWithoutPesquisasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPesquisasInput, UserUncheckedCreateWithoutPesquisasInput>
  }

  export type CompetidorUpsertWithWhereUniqueWithoutPesquisaInput = {
    where: CompetidorWhereUniqueInput
    update: XOR<CompetidorUpdateWithoutPesquisaInput, CompetidorUncheckedUpdateWithoutPesquisaInput>
    create: XOR<CompetidorCreateWithoutPesquisaInput, CompetidorUncheckedCreateWithoutPesquisaInput>
  }

  export type CompetidorUpdateWithWhereUniqueWithoutPesquisaInput = {
    where: CompetidorWhereUniqueInput
    data: XOR<CompetidorUpdateWithoutPesquisaInput, CompetidorUncheckedUpdateWithoutPesquisaInput>
  }

  export type CompetidorUpdateManyWithWhereWithoutPesquisaInput = {
    where: CompetidorScalarWhereInput
    data: XOR<CompetidorUpdateManyMutationInput, CompetidorUncheckedUpdateManyWithoutPesquisaInput>
  }

  export type CompetidorScalarWhereInput = {
    AND?: CompetidorScalarWhereInput | CompetidorScalarWhereInput[]
    OR?: CompetidorScalarWhereInput[]
    NOT?: CompetidorScalarWhereInput | CompetidorScalarWhereInput[]
    id?: StringFilter<"Competidor"> | string
    googleId?: StringFilter<"Competidor"> | string
    nome?: StringFilter<"Competidor"> | string
    nota?: FloatNullableFilter<"Competidor"> | number | null
    estilo?: StringNullableFilter<"Competidor"> | string | null
    pesquisaId?: StringFilter<"Competidor"> | string
  }

  export type UserUpsertWithoutPesquisasInput = {
    update: XOR<UserUpdateWithoutPesquisasInput, UserUncheckedUpdateWithoutPesquisasInput>
    create: XOR<UserCreateWithoutPesquisasInput, UserUncheckedCreateWithoutPesquisasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPesquisasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPesquisasInput, UserUncheckedUpdateWithoutPesquisasInput>
  }

  export type UserUpdateWithoutPesquisasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutPesquisasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCardapioCreateWithoutCompetidorInput = {
    id?: string
    nome: string
    preco?: number | null
    categoria?: string | null
  }

  export type ItemCardapioUncheckedCreateWithoutCompetidorInput = {
    id?: string
    nome: string
    preco?: number | null
    categoria?: string | null
  }

  export type ItemCardapioCreateOrConnectWithoutCompetidorInput = {
    where: ItemCardapioWhereUniqueInput
    create: XOR<ItemCardapioCreateWithoutCompetidorInput, ItemCardapioUncheckedCreateWithoutCompetidorInput>
  }

  export type ItemCardapioCreateManyCompetidorInputEnvelope = {
    data: ItemCardapioCreateManyCompetidorInput | ItemCardapioCreateManyCompetidorInput[]
    skipDuplicates?: boolean
  }

  export type PesquisaMercadoCreateWithoutCompetidoresInput = {
    id?: string
    cidade: string
    estado: string
    status?: string
    criadoEm?: Date | string
    usuario: UserCreateNestedOneWithoutPesquisasInput
  }

  export type PesquisaMercadoUncheckedCreateWithoutCompetidoresInput = {
    id?: string
    cidade: string
    estado: string
    status?: string
    usuarioId: string
    criadoEm?: Date | string
  }

  export type PesquisaMercadoCreateOrConnectWithoutCompetidoresInput = {
    where: PesquisaMercadoWhereUniqueInput
    create: XOR<PesquisaMercadoCreateWithoutCompetidoresInput, PesquisaMercadoUncheckedCreateWithoutCompetidoresInput>
  }

  export type ItemCardapioUpsertWithWhereUniqueWithoutCompetidorInput = {
    where: ItemCardapioWhereUniqueInput
    update: XOR<ItemCardapioUpdateWithoutCompetidorInput, ItemCardapioUncheckedUpdateWithoutCompetidorInput>
    create: XOR<ItemCardapioCreateWithoutCompetidorInput, ItemCardapioUncheckedCreateWithoutCompetidorInput>
  }

  export type ItemCardapioUpdateWithWhereUniqueWithoutCompetidorInput = {
    where: ItemCardapioWhereUniqueInput
    data: XOR<ItemCardapioUpdateWithoutCompetidorInput, ItemCardapioUncheckedUpdateWithoutCompetidorInput>
  }

  export type ItemCardapioUpdateManyWithWhereWithoutCompetidorInput = {
    where: ItemCardapioScalarWhereInput
    data: XOR<ItemCardapioUpdateManyMutationInput, ItemCardapioUncheckedUpdateManyWithoutCompetidorInput>
  }

  export type ItemCardapioScalarWhereInput = {
    AND?: ItemCardapioScalarWhereInput | ItemCardapioScalarWhereInput[]
    OR?: ItemCardapioScalarWhereInput[]
    NOT?: ItemCardapioScalarWhereInput | ItemCardapioScalarWhereInput[]
    id?: StringFilter<"ItemCardapio"> | string
    nome?: StringFilter<"ItemCardapio"> | string
    preco?: FloatNullableFilter<"ItemCardapio"> | number | null
    categoria?: StringNullableFilter<"ItemCardapio"> | string | null
    competidorId?: StringFilter<"ItemCardapio"> | string
  }

  export type PesquisaMercadoUpsertWithoutCompetidoresInput = {
    update: XOR<PesquisaMercadoUpdateWithoutCompetidoresInput, PesquisaMercadoUncheckedUpdateWithoutCompetidoresInput>
    create: XOR<PesquisaMercadoCreateWithoutCompetidoresInput, PesquisaMercadoUncheckedCreateWithoutCompetidoresInput>
    where?: PesquisaMercadoWhereInput
  }

  export type PesquisaMercadoUpdateToOneWithWhereWithoutCompetidoresInput = {
    where?: PesquisaMercadoWhereInput
    data: XOR<PesquisaMercadoUpdateWithoutCompetidoresInput, PesquisaMercadoUncheckedUpdateWithoutCompetidoresInput>
  }

  export type PesquisaMercadoUpdateWithoutCompetidoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutPesquisasNestedInput
  }

  export type PesquisaMercadoUncheckedUpdateWithoutCompetidoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetidorCreateWithoutItensCardapioInput = {
    id?: string
    googleId: string
    nome: string
    nota?: number | null
    estilo?: string | null
    pesquisa: PesquisaMercadoCreateNestedOneWithoutCompetidoresInput
  }

  export type CompetidorUncheckedCreateWithoutItensCardapioInput = {
    id?: string
    googleId: string
    nome: string
    nota?: number | null
    estilo?: string | null
    pesquisaId: string
  }

  export type CompetidorCreateOrConnectWithoutItensCardapioInput = {
    where: CompetidorWhereUniqueInput
    create: XOR<CompetidorCreateWithoutItensCardapioInput, CompetidorUncheckedCreateWithoutItensCardapioInput>
  }

  export type CompetidorUpsertWithoutItensCardapioInput = {
    update: XOR<CompetidorUpdateWithoutItensCardapioInput, CompetidorUncheckedUpdateWithoutItensCardapioInput>
    create: XOR<CompetidorCreateWithoutItensCardapioInput, CompetidorUncheckedCreateWithoutItensCardapioInput>
    where?: CompetidorWhereInput
  }

  export type CompetidorUpdateToOneWithWhereWithoutItensCardapioInput = {
    where?: CompetidorWhereInput
    data: XOR<CompetidorUpdateWithoutItensCardapioInput, CompetidorUncheckedUpdateWithoutItensCardapioInput>
  }

  export type CompetidorUpdateWithoutItensCardapioInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    estilo?: NullableStringFieldUpdateOperationsInput | string | null
    pesquisa?: PesquisaMercadoUpdateOneRequiredWithoutCompetidoresNestedInput
  }

  export type CompetidorUncheckedUpdateWithoutItensCardapioInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    estilo?: NullableStringFieldUpdateOperationsInput | string | null
    pesquisaId?: StringFieldUpdateOperationsInput | string
  }

  export type PesquisaMercadoCreateManyUsuarioInput = {
    id?: string
    cidade: string
    estado: string
    status?: string
    criadoEm?: Date | string
  }

  export type PesquisaMercadoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    competidores?: CompetidorUpdateManyWithoutPesquisaNestedInput
  }

  export type PesquisaMercadoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    competidores?: CompetidorUncheckedUpdateManyWithoutPesquisaNestedInput
  }

  export type PesquisaMercadoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetidorCreateManyPesquisaInput = {
    id?: string
    googleId: string
    nome: string
    nota?: number | null
    estilo?: string | null
  }

  export type CompetidorUpdateWithoutPesquisaInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    estilo?: NullableStringFieldUpdateOperationsInput | string | null
    itensCardapio?: ItemCardapioUpdateManyWithoutCompetidorNestedInput
  }

  export type CompetidorUncheckedUpdateWithoutPesquisaInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    estilo?: NullableStringFieldUpdateOperationsInput | string | null
    itensCardapio?: ItemCardapioUncheckedUpdateManyWithoutCompetidorNestedInput
  }

  export type CompetidorUncheckedUpdateManyWithoutPesquisaInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    estilo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemCardapioCreateManyCompetidorInput = {
    id?: string
    nome: string
    preco?: number | null
    categoria?: string | null
  }

  export type ItemCardapioUpdateWithoutCompetidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemCardapioUncheckedUpdateWithoutCompetidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemCardapioUncheckedUpdateManyWithoutCompetidorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
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