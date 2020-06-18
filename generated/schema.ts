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

export class PrizePoolBuilder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PrizePoolBuilder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PrizePoolBuilder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PrizePoolBuilder", id.toString(), this);
  }

  static load(id: string): PrizePoolBuilder | null {
    return store.get("PrizePoolBuilder", id) as PrizePoolBuilder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get trustedForwarder(): Bytes {
    let value = this.get("trustedForwarder");
    return value.toBytes();
  }

  set trustedForwarder(value: Bytes) {
    this.set("trustedForwarder", Value.fromBytes(value));
  }

  get compoundPeriodicPrizePoolFactory(): Bytes {
    let value = this.get("compoundPeriodicPrizePoolFactory");
    return value.toBytes();
  }

  set compoundPeriodicPrizePoolFactory(value: Bytes) {
    this.set("compoundPeriodicPrizePoolFactory", Value.fromBytes(value));
  }

  get ticketFactory(): Bytes {
    let value = this.get("ticketFactory");
    return value.toBytes();
  }

  set ticketFactory(value: Bytes) {
    this.set("ticketFactory", Value.fromBytes(value));
  }

  get timelockFactory(): Bytes {
    let value = this.get("timelockFactory");
    return value.toBytes();
  }

  set timelockFactory(value: Bytes) {
    this.set("timelockFactory", Value.fromBytes(value));
  }

  get sponsorshipFactory(): Bytes {
    let value = this.get("sponsorshipFactory");
    return value.toBytes();
  }

  set sponsorshipFactory(value: Bytes) {
    this.set("sponsorshipFactory", Value.fromBytes(value));
  }

  get interestTrackerFactory(): Bytes {
    let value = this.get("interestTrackerFactory");
    return value.toBytes();
  }

  set interestTrackerFactory(value: Bytes) {
    this.set("interestTrackerFactory", Value.fromBytes(value));
  }

  get creditFactory(): Bytes {
    let value = this.get("creditFactory");
    return value.toBytes();
  }

  set creditFactory(value: Bytes) {
    this.set("creditFactory", Value.fromBytes(value));
  }

  get governor(): Bytes {
    let value = this.get("governor");
    return value.toBytes();
  }

  set governor(value: Bytes) {
    this.set("governor", Value.fromBytes(value));
  }

  get rng(): Bytes {
    let value = this.get("rng");
    return value.toBytes();
  }

  set rng(value: Bytes) {
    this.set("rng", Value.fromBytes(value));
  }
}

export class SingleRandomWinnerPrizePoolBuilder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save SingleRandomWinnerPrizePoolBuilder entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SingleRandomWinnerPrizePoolBuilder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SingleRandomWinnerPrizePoolBuilder", id.toString(), this);
  }

  static load(id: string): SingleRandomWinnerPrizePoolBuilder | null {
    return store.get(
      "SingleRandomWinnerPrizePoolBuilder",
      id
    ) as SingleRandomWinnerPrizePoolBuilder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get prizePoolBuilder(): string {
    let value = this.get("prizePoolBuilder");
    return value.toString();
  }

  set prizePoolBuilder(value: string) {
    this.set("prizePoolBuilder", Value.fromString(value));
  }

  get prizeStrategyFactory(): Bytes {
    let value = this.get("prizeStrategyFactory");
    return value.toBytes();
  }

  set prizeStrategyFactory(value: Bytes) {
    this.set("prizeStrategyFactory", Value.fromBytes(value));
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

  get currentState(): string {
    let value = this.get("currentState");
    return value.toString();
  }

  set currentState(value: string) {
    this.set("currentState", Value.fromString(value));
  }

  get currentPrizeId(): BigInt {
    let value = this.get("currentPrizeId");
    return value.toBigInt();
  }

  set currentPrizeId(value: BigInt) {
    this.set("currentPrizeId", Value.fromBigInt(value));
  }

  get prizeStrategy(): Bytes {
    let value = this.get("prizeStrategy");
    return value.toBytes();
  }

  set prizeStrategy(value: Bytes) {
    this.set("prizeStrategy", Value.fromBytes(value));
  }

  get rng(): Bytes {
    let value = this.get("rng");
    return value.toBytes();
  }

  set rng(value: Bytes) {
    this.set("rng", Value.fromBytes(value));
  }

  get prizePeriodSeconds(): BigInt {
    let value = this.get("prizePeriodSeconds");
    return value.toBigInt();
  }

  set prizePeriodSeconds(value: BigInt) {
    this.set("prizePeriodSeconds", Value.fromBigInt(value));
  }

  get prizePeriodStartedAt(): BigInt {
    let value = this.get("prizePeriodStartedAt");
    return value.toBigInt();
  }

  set prizePeriodStartedAt(value: BigInt) {
    this.set("prizePeriodStartedAt", Value.fromBigInt(value));
  }

  get previousPrize(): BigInt | null {
    let value = this.get("previousPrize");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set previousPrize(value: BigInt | null) {
    if (value === null) {
      this.unset("previousPrize");
    } else {
      this.set("previousPrize", Value.fromBigInt(value as BigInt));
    }
  }

  get previousPrizeAverageTickets(): BigInt | null {
    let value = this.get("previousPrizeAverageTickets");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set previousPrizeAverageTickets(value: BigInt | null) {
    if (value === null) {
      this.unset("previousPrizeAverageTickets");
    } else {
      this.set(
        "previousPrizeAverageTickets",
        Value.fromBigInt(value as BigInt)
      );
    }
  }

  get feeScaleMantissa(): BigInt | null {
    let value = this.get("feeScaleMantissa");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set feeScaleMantissa(value: BigInt | null) {
    if (value === null) {
      this.unset("feeScaleMantissa");
    } else {
      this.set("feeScaleMantissa", Value.fromBigInt(value as BigInt));
    }
  }

  get rngRequestId(): BigInt | null {
    let value = this.get("rngRequestId");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set rngRequestId(value: BigInt | null) {
    if (value === null) {
      this.unset("rngRequestId");
    } else {
      this.set("rngRequestId", Value.fromBigInt(value as BigInt));
    }
  }

  get prizes(): Array<string> {
    let value = this.get("prizes");
    return value.toStringArray();
  }

  set prizes(value: Array<string>) {
    this.set("prizes", Value.fromStringArray(value));
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

  get prizePool(): string {
    let value = this.get("prizePool");
    return value.toString();
  }

  set prizePool(value: string) {
    this.set("prizePool", Value.fromString(value));
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

  get prizePool(): string {
    let value = this.get("prizePool");
    return value.toString();
  }

  set prizePool(value: string) {
    this.set("prizePool", Value.fromString(value));
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

  get prizePool(): string {
    let value = this.get("prizePool");
    return value.toString();
  }

  set prizePool(value: string) {
    this.set("prizePool", Value.fromString(value));
  }

  get prize(): BigInt | null {
    let value = this.get("prize");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set prize(value: BigInt | null) {
    if (value === null) {
      this.unset("prize");
    } else {
      this.set("prize", Value.fromBigInt(value as BigInt));
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

  get rngRequestId(): BigInt | null {
    let value = this.get("rngRequestId");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set rngRequestId(value: BigInt | null) {
    if (value === null) {
      this.unset("rngRequestId");
    } else {
      this.set("rngRequestId", Value.fromBigInt(value as BigInt));
    }
  }

  get randomNumber(): Bytes | null {
    let value = this.get("randomNumber");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set randomNumber(value: Bytes | null) {
    if (value === null) {
      this.unset("randomNumber");
    } else {
      this.set("randomNumber", Value.fromBytes(value as Bytes));
    }
  }

  get rewardStartedOperator(): Bytes | null {
    let value = this.get("rewardStartedOperator");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set rewardStartedOperator(value: Bytes | null) {
    if (value === null) {
      this.unset("rewardStartedOperator");
    } else {
      this.set("rewardStartedOperator", Value.fromBytes(value as Bytes));
    }
  }

  get rewardCompletedOperator(): Bytes | null {
    let value = this.get("rewardCompletedOperator");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set rewardCompletedOperator(value: Bytes | null) {
    if (value === null) {
      this.unset("rewardCompletedOperator");
    } else {
      this.set("rewardCompletedOperator", Value.fromBytes(value as Bytes));
    }
  }

  get winners(): Array<string> | null {
    let value = this.get("winners");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set winners(value: Array<string> | null) {
    if (value === null) {
      this.unset("winners");
    } else {
      this.set("winners", Value.fromStringArray(value as Array<string>));
    }
  }
}
