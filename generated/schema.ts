// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PrizeStrategy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PrizeStrategy entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PrizeStrategy entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PrizeStrategy", id.toString(), this);
  }

  static load(id: string): PrizeStrategy | null {
    return store.get("PrizeStrategy", id) as PrizeStrategy | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get compoundPrizePoolBuilder(): string {
    let value = this.get("compoundPrizePoolBuilder");
    return value.toString();
  }

  set compoundPrizePoolBuilder(value: string) {
    this.set("compoundPrizePoolBuilder", Value.fromString(value));
  }

  get prizePool(): string {
    let value = this.get("prizePool");
    return value.toString();
  }

  set prizePool(value: string) {
    this.set("prizePool", Value.fromString(value));
  }

  get comptroller(): Bytes {
    let value = this.get("comptroller");
    return value.toBytes();
  }

  set comptroller(value: Bytes) {
    this.set("comptroller", Value.fromBytes(value));
  }

  get ticket(): Bytes {
    let value = this.get("ticket");
    return value.toBytes();
  }

  set ticket(value: Bytes) {
    this.set("ticket", Value.fromBytes(value));
  }

  get rng(): Bytes {
    let value = this.get("rng");
    return value.toBytes();
  }

  set rng(value: Bytes) {
    this.set("rng", Value.fromBytes(value));
  }

  get sponsorship(): Bytes {
    let value = this.get("sponsorship");
    return value.toBytes();
  }

  set sponsorship(value: Bytes) {
    this.set("sponsorship", Value.fromBytes(value));
  }

<<<<<<< HEAD
=======
  get comptroller(): Bytes {
    let value = this.get("comptroller");
    return value.toBytes();
  }

  set comptroller(value: Bytes) {
    this.set("comptroller", Value.fromBytes(value));
  }

>>>>>>> 3567037... WIP - Add subgraph for Comptroller BalanceDrips
  get currentPrizeId(): BigInt {
    let value = this.get("currentPrizeId");
    return value.toBigInt();
  }

  set currentPrizeId(value: BigInt) {
    this.set("currentPrizeId", Value.fromBigInt(value));
  }

  get currentState(): string {
    let value = this.get("currentState");
    return value.toString();
  }

  set currentState(value: string) {
    this.set("currentState", Value.fromString(value));
  }

  get prizePeriodSeconds(): BigInt {
    let value = this.get("prizePeriodSeconds");
    return value.toBigInt();
  }

  set prizePeriodSeconds(value: BigInt) {
    this.set("prizePeriodSeconds", Value.fromBigInt(value));
  }

  get exitFeeMantissa(): BigInt {
    let value = this.get("exitFeeMantissa");
    return value.toBigInt();
  }

  set exitFeeMantissa(value: BigInt) {
    this.set("exitFeeMantissa", Value.fromBigInt(value));
  }

  get creditRateMantissa(): BigInt {
    let value = this.get("creditRateMantissa");
    return value.toBigInt();
  }

  set creditRateMantissa(value: BigInt) {
    this.set("creditRateMantissa", Value.fromBigInt(value));
  }

  get prizesCount(): BigInt {
    let value = this.get("prizesCount");
    return value.toBigInt();
  }

  set prizesCount(value: BigInt) {
    this.set("prizesCount", Value.fromBigInt(value));
  }

  get balanceDrips(): Array<string> {
    let value = this.get("balanceDrips");
    return value.toStringArray();
  }

  set balanceDrips(value: Array<string>) {
    this.set("balanceDrips", Value.fromStringArray(value));
  }

  get volumeDrips(): Array<string> {
    let value = this.get("volumeDrips");
    return value.toStringArray();
  }

  set volumeDrips(value: Array<string>) {
    this.set("volumeDrips", Value.fromStringArray(value));
  }

  get referralVolumeDrips(): Array<string> {
    let value = this.get("referralVolumeDrips");
    return value.toStringArray();
  }

  set referralVolumeDrips(value: Array<string>) {
    this.set("referralVolumeDrips", Value.fromStringArray(value));
  }

  get prizes(): Array<string> {
    let value = this.get("prizes");
    return value.toStringArray();
  }

  set prizes(value: Array<string>) {
    this.set("prizes", Value.fromStringArray(value));
  }
}

export class BalanceDrip extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BalanceDrip entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BalanceDrip entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BalanceDrip", id.toString(), this);
  }

  static load(id: string): BalanceDrip | null {
    return store.get("BalanceDrip", id) as BalanceDrip | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get prizeStrategy(): string {
    let value = this.get("prizeStrategy");
    return value.toString();
  }

  set prizeStrategy(value: string) {
    this.set("prizeStrategy", Value.fromString(value));
  }

  get measureToken(): Bytes {
    let value = this.get("measureToken");
    return value.toBytes();
  }

  set measureToken(value: Bytes) {
    this.set("measureToken", Value.fromBytes(value));
  }

  get dripToken(): Bytes {
    let value = this.get("dripToken");
    return value.toBytes();
  }

  set dripToken(value: Bytes) {
    this.set("dripToken", Value.fromBytes(value));
  }

  get dripRatePerSecond(): BigInt | null {
    let value = this.get("dripRatePerSecond");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set dripRatePerSecond(value: BigInt | null) {
    if (value === null) {
      this.unset("dripRatePerSecond");
    } else {
      this.set("dripRatePerSecond", Value.fromBigInt(value as BigInt));
    }
  }

  get removed(): boolean {
    let value = this.get("removed");
    return value.toBoolean();
  }

  set removed(value: boolean) {
    this.set("removed", Value.fromBoolean(value));
  }
}

export class VolumeDrip extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VolumeDrip entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VolumeDrip entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VolumeDrip", id.toString(), this);
  }

  static load(id: string): VolumeDrip | null {
    return store.get("VolumeDrip", id) as VolumeDrip | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get prizeStrategy(): string {
    let value = this.get("prizeStrategy");
    return value.toString();
  }

  set prizeStrategy(value: string) {
    this.set("prizeStrategy", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get measureToken(): Bytes | null {
    let value = this.get("measureToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set measureToken(value: Bytes | null) {
    if (value === null) {
      this.unset("measureToken");
    } else {
      this.set("measureToken", Value.fromBytes(value as Bytes));
    }
  }

  get dripToken(): Bytes | null {
    let value = this.get("dripToken");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set dripToken(value: Bytes | null) {
    if (value === null) {
      this.unset("dripToken");
    } else {
      this.set("dripToken", Value.fromBytes(value as Bytes));
    }
  }

  get periodSeconds(): BigInt | null {
    let value = this.get("periodSeconds");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set periodSeconds(value: BigInt | null) {
    if (value === null) {
      this.unset("periodSeconds");
    } else {
      this.set("periodSeconds", Value.fromBigInt(value as BigInt));
    }
  }

  get dripAmount(): BigInt | null {
    let value = this.get("dripAmount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set dripAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("dripAmount");
    } else {
      this.set("dripAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get referral(): boolean {
    let value = this.get("referral");
    return value.toBoolean();
  }

  set referral(value: boolean) {
    this.set("referral", Value.fromBoolean(value));
  }

  get periods(): Array<string> {
    let value = this.get("periods");
    return value.toStringArray();
  }

  set periods(value: Array<string>) {
    this.set("periods", Value.fromStringArray(value));
  }
}

export class VolumeDripPeriod extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VolumeDripPeriod entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VolumeDripPeriod entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VolumeDripPeriod", id.toString(), this);
  }

  static load(id: string): VolumeDripPeriod | null {
    return store.get("VolumeDripPeriod", id) as VolumeDripPeriod | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get volumeDrip(): string {
    let value = this.get("volumeDrip");
    return value.toString();
  }

  set volumeDrip(value: string) {
    this.set("volumeDrip", Value.fromString(value));
  }
}

export class PlayerBalanceDrip extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PlayerBalanceDrip entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PlayerBalanceDrip entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PlayerBalanceDrip", id.toString(), this);
  }

  static load(id: string): PlayerBalanceDrip | null {
    return store.get("PlayerBalanceDrip", id) as PlayerBalanceDrip | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get player(): string {
    let value = this.get("player");
    return value.toString();
  }

  set player(value: string) {
    this.set("player", Value.fromString(value));
  }

  get balanceDrip(): string {
    let value = this.get("balanceDrip");
    return value.toString();
  }

  set balanceDrip(value: string) {
    this.set("balanceDrip", Value.fromString(value));
  }

  get lastExchangeRateMantissa(): BigInt | null {
    let value = this.get("lastExchangeRateMantissa");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastExchangeRateMantissa(value: BigInt | null) {
    if (value === null) {
      this.unset("lastExchangeRateMantissa");
    } else {
      this.set("lastExchangeRateMantissa", Value.fromBigInt(value as BigInt));
    }
  }

  get dripBalance(): BigInt | null {
    let value = this.get("dripBalance");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set dripBalance(value: BigInt | null) {
    if (value === null) {
      this.unset("dripBalance");
    } else {
      this.set("dripBalance", Value.fromBigInt(value as BigInt));
    }
  }
}

export class PlayerVolumeDrip extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PlayerVolumeDrip entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PlayerVolumeDrip entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PlayerVolumeDrip", id.toString(), this);
  }

  static load(id: string): PlayerVolumeDrip | null {
    return store.get("PlayerVolumeDrip", id) as PlayerVolumeDrip | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get player(): string {
    let value = this.get("player");
    return value.toString();
  }

  set player(value: string) {
    this.set("player", Value.fromString(value));
  }

  get volumeDrip(): string {
    let value = this.get("volumeDrip");
    return value.toString();
  }

  set volumeDrip(value: string) {
    this.set("volumeDrip", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get period(): BigInt {
    let value = this.get("period");
    return value.toBigInt();
  }

  set period(value: BigInt) {
    this.set("period", Value.fromBigInt(value));
  }

  get accrued(): BigInt {
    let value = this.get("accrued");
    return value.toBigInt();
  }

  set accrued(value: BigInt) {
    this.set("accrued", Value.fromBigInt(value));
  }
}

export class PrizePool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PrizePool entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PrizePool entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PrizePool", id.toString(), this);
  }

  static load(id: string): PrizePool | null {
    return store.get("PrizePool", id) as PrizePool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get prizeStrategy(): string {
    let value = this.get("prizeStrategy");
    return value.toString();
  }

  set prizeStrategy(value: string) {
    this.set("prizeStrategy", Value.fromString(value));
  }

  get underlyingCollateralToken(): Bytes {
    let value = this.get("underlyingCollateralToken");
    return value.toBytes();
  }

  set underlyingCollateralToken(value: Bytes) {
    this.set("underlyingCollateralToken", Value.fromBytes(value));
  }

  get underlyingCollateralDecimals(): BigInt {
    let value = this.get("underlyingCollateralDecimals");
    return value.toBigInt();
  }

  set underlyingCollateralDecimals(value: BigInt) {
    this.set("underlyingCollateralDecimals", Value.fromBigInt(value));
  }

  get underlyingCollateralName(): string {
    let value = this.get("underlyingCollateralName");
    return value.toString();
  }

  set underlyingCollateralName(value: string) {
    this.set("underlyingCollateralName", Value.fromString(value));
  }

  get underlyingCollateralSymbol(): string {
    let value = this.get("underlyingCollateralSymbol");
    return value.toString();
  }

  set underlyingCollateralSymbol(value: string) {
    this.set("underlyingCollateralSymbol", Value.fromString(value));
  }

  get maxExitFeeMantissa(): BigInt | null {
    let value = this.get("maxExitFeeMantissa");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set maxExitFeeMantissa(value: BigInt | null) {
    if (value === null) {
      this.unset("maxExitFeeMantissa");
    } else {
      this.set("maxExitFeeMantissa", Value.fromBigInt(value as BigInt));
    }
  }

  get maxTimelockDuration(): BigInt {
    let value = this.get("maxTimelockDuration");
    return value.toBigInt();
  }

  set maxTimelockDuration(value: BigInt) {
    this.set("maxTimelockDuration", Value.fromBigInt(value));
  }

  get timelockTotalSupply(): BigInt {
    let value = this.get("timelockTotalSupply");
    return value.toBigInt();
  }

  set timelockTotalSupply(value: BigInt) {
    this.set("timelockTotalSupply", Value.fromBigInt(value));
  }

  get playerCount(): BigInt {
    let value = this.get("playerCount");
    return value.toBigInt();
  }

  set playerCount(value: BigInt) {
    this.set("playerCount", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get cumulativePrizeGross(): BigInt {
    let value = this.get("cumulativePrizeGross");
    return value.toBigInt();
  }

  set cumulativePrizeGross(value: BigInt) {
    this.set("cumulativePrizeGross", Value.fromBigInt(value));
  }

  get cumulativePrizeReserveFee(): BigInt {
    let value = this.get("cumulativePrizeReserveFee");
    return value.toBigInt();
  }

  set cumulativePrizeReserveFee(value: BigInt) {
    this.set("cumulativePrizeReserveFee", Value.fromBigInt(value));
  }

  get cumulativePrizeNet(): BigInt {
    let value = this.get("cumulativePrizeNet");
    return value.toBigInt();
  }

  set cumulativePrizeNet(value: BigInt) {
    this.set("cumulativePrizeNet", Value.fromBigInt(value));
  }

  get players(): Array<string> {
    let value = this.get("players");
    return value.toStringArray();
  }

  set players(value: Array<string>) {
    this.set("players", Value.fromStringArray(value));
  }
}

export class Player extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Player entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Player entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Player", id.toString(), this);
  }

  static load(id: string): Player | null {
    return store.get("Player", id) as Player | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get timelockedBalance(): BigInt {
    let value = this.get("timelockedBalance");
    return value.toBigInt();
  }

  set timelockedBalance(value: BigInt) {
    this.set("timelockedBalance", Value.fromBigInt(value));
  }

  get unlockTimestamp(): BigInt {
    let value = this.get("unlockTimestamp");
    return value.toBigInt();
  }

  set unlockTimestamp(value: BigInt) {
    this.set("unlockTimestamp", Value.fromBigInt(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get prizePool(): string {
    let value = this.get("prizePool");
    return value.toString();
  }

  set prizePool(value: string) {
    this.set("prizePool", Value.fromString(value));
  }
}

export class CompoundPrizePoolBuilder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save CompoundPrizePoolBuilder entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CompoundPrizePoolBuilder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CompoundPrizePoolBuilder", id.toString(), this);
  }

  static load(id: string): CompoundPrizePoolBuilder | null {
    return store.get(
      "CompoundPrizePoolBuilder",
      id
    ) as CompoundPrizePoolBuilder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get comptroller(): Bytes {
    let value = this.get("comptroller");
    return value.toBytes();
  }

<<<<<<< HEAD
  set comptroller(value: Bytes) {
    this.set("comptroller", Value.fromBytes(value));
  }

  get trustedForwarder(): Bytes {
    let value = this.get("trustedForwarder");
=======
  set trustedForwarder(value: Bytes) {
    this.set("trustedForwarder", Value.fromBytes(value));
  }

  get comptroller(): Bytes {
    let value = this.get("comptroller");
    return value.toBytes();
  }

  set comptroller(value: Bytes) {
    this.set("comptroller", Value.fromBytes(value));
  }

  get rng(): Bytes {
    let value = this.get("rng");
>>>>>>> 3567037... WIP - Add subgraph for Comptroller BalanceDrips
    return value.toBytes();
  }

  set trustedForwarder(value: Bytes) {
    this.set("trustedForwarder", Value.fromBytes(value));
  }
}

export class Ticket extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Ticket entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Ticket entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Ticket", id.toString(), this);
  }

  static load(id: string): Ticket | null {
    return store.get("Ticket", id) as Ticket | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get prizeStrategy(): string {
    let value = this.get("prizeStrategy");
    return value.toString();
  }

  set prizeStrategy(value: string) {
    this.set("prizeStrategy", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }
}

export class Sponsorship extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sponsorship entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sponsorship entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sponsorship", id.toString(), this);
  }

  static load(id: string): Sponsorship | null {
    return store.get("Sponsorship", id) as Sponsorship | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get prizeStrategy(): string {
    let value = this.get("prizeStrategy");
    return value.toString();
  }

  set prizeStrategy(value: string) {
    this.set("prizeStrategy", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }
}

export class Prize extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Prize entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Prize entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Prize", id.toString(), this);
  }

  static load(id: string): Prize | null {
    return store.get("Prize", id) as Prize | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get awardStartOperator(): Bytes | null {
    let value = this.get("awardStartOperator");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set awardStartOperator(value: Bytes | null) {
    if (value === null) {
      this.unset("awardStartOperator");
    } else {
      this.set("awardStartOperator", Value.fromBytes(value as Bytes));
    }
  }

  get awardedOperator(): Bytes | null {
    let value = this.get("awardedOperator");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set awardedOperator(value: Bytes | null) {
    if (value === null) {
      this.unset("awardedOperator");
    } else {
      this.set("awardedOperator", Value.fromBytes(value as Bytes));
    }
  }

  get prizeStrategy(): string {
    let value = this.get("prizeStrategy");
    return value.toString();
  }

  set prizeStrategy(value: string) {
    this.set("prizeStrategy", Value.fromString(value));
  }

  get prizePeriodStartedTimestamp(): BigInt {
    let value = this.get("prizePeriodStartedTimestamp");
    return value.toBigInt();
  }

  set prizePeriodStartedTimestamp(value: BigInt) {
    this.set("prizePeriodStartedTimestamp", Value.fromBigInt(value));
  }

  get lockBlock(): BigInt | null {
    let value = this.get("lockBlock");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lockBlock(value: BigInt | null) {
    if (value === null) {
      this.unset("lockBlock");
    } else {
      this.set("lockBlock", Value.fromBigInt(value as BigInt));
    }
  }

  get awardedBlock(): BigInt | null {
    let value = this.get("awardedBlock");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set awardedBlock(value: BigInt | null) {
    if (value === null) {
      this.unset("awardedBlock");
    } else {
      this.set("awardedBlock", Value.fromBigInt(value as BigInt));
    }
  }

  get awardedTimestamp(): BigInt | null {
    let value = this.get("awardedTimestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set awardedTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("awardedTimestamp");
    } else {
      this.set("awardedTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get rngRequestId(): BigInt {
    let value = this.get("rngRequestId");
    return value.toBigInt();
  }

  set rngRequestId(value: BigInt) {
    this.set("rngRequestId", Value.fromBigInt(value));
  }

  get randomNumber(): BigInt | null {
    let value = this.get("randomNumber");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set randomNumber(value: BigInt | null) {
    if (value === null) {
      this.unset("randomNumber");
    } else {
      this.set("randomNumber", Value.fromBigInt(value as BigInt));
    }
  }

  get gross(): BigInt | null {
    let value = this.get("gross");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set gross(value: BigInt | null) {
    if (value === null) {
      this.unset("gross");
    } else {
      this.set("gross", Value.fromBigInt(value as BigInt));
    }
  }

  get net(): BigInt | null {
    let value = this.get("net");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set net(value: BigInt | null) {
    if (value === null) {
      this.unset("net");
    } else {
      this.set("net", Value.fromBigInt(value as BigInt));
    }
  }

  get reserveFee(): BigInt | null {
    let value = this.get("reserveFee");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set reserveFee(value: BigInt | null) {
    if (value === null) {
      this.unset("reserveFee");
    } else {
      this.set("reserveFee", Value.fromBigInt(value as BigInt));
    }
  }

  get winners(): Array<Bytes> | null {
    let value = this.get("winners");
    if (value === null) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set winners(value: Array<Bytes> | null) {
    if (value === null) {
      this.unset("winners");
    } else {
      this.set("winners", Value.fromBytesArray(value as Array<Bytes>));
    }
  }
}

export class Comptroller extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Comptroller entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Comptroller entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Comptroller", id.toString(), this);
  }

  static load(id: string): Comptroller | null {
    return store.get("Comptroller", id) as Comptroller | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get reserveRateMantissa(): BigInt {
    let value = this.get("reserveRateMantissa");
    return value.toBigInt();
  }

  set reserveRateMantissa(value: BigInt) {
    this.set("reserveRateMantissa", Value.fromBigInt(value));
  }
}
