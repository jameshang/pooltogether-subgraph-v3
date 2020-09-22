// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ExternalErc20AwardAdded extends ethereum.Event {
  get params(): ExternalErc20AwardAdded__Params {
    return new ExternalErc20AwardAdded__Params(this);
  }
}

export class ExternalErc20AwardAdded__Params {
  _event: ExternalErc20AwardAdded;

  constructor(event: ExternalErc20AwardAdded) {
    this._event = event;
  }

  get externalErc20(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ExternalErc20AwardRemoved extends ethereum.Event {
  get params(): ExternalErc20AwardRemoved__Params {
    return new ExternalErc20AwardRemoved__Params(this);
  }
}

export class ExternalErc20AwardRemoved__Params {
  _event: ExternalErc20AwardRemoved;

  constructor(event: ExternalErc20AwardRemoved) {
    this._event = event;
  }

  get externalErc20Award(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ExternalErc721AwardAdded extends ethereum.Event {
  get params(): ExternalErc721AwardAdded__Params {
    return new ExternalErc721AwardAdded__Params(this);
  }
}

export class ExternalErc721AwardAdded__Params {
  _event: ExternalErc721AwardAdded;

  constructor(event: ExternalErc721AwardAdded) {
    this._event = event;
  }

  get externalErc721(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class ExternalErc721AwardRemoved extends ethereum.Event {
  get params(): ExternalErc721AwardRemoved__Params {
    return new ExternalErc721AwardRemoved__Params(this);
  }
}

export class ExternalErc721AwardRemoved__Params {
  _event: ExternalErc721AwardRemoved;

  constructor(event: ExternalErc721AwardRemoved) {
    this._event = event;
  }

  get externalErc721Award(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PrizePoolAwardStarted extends ethereum.Event {
  get params(): PrizePoolAwardStarted__Params {
    return new PrizePoolAwardStarted__Params(this);
  }
}

export class PrizePoolAwardStarted__Params {
  _event: PrizePoolAwardStarted;

  constructor(event: PrizePoolAwardStarted) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get prizePool(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get rngRequestId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rngLockBlock(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class PrizePoolAwarded extends ethereum.Event {
  get params(): PrizePoolAwarded__Params {
    return new PrizePoolAwarded__Params(this);
  }
}

export class PrizePoolAwarded__Params {
  _event: PrizePoolAwarded;

  constructor(event: PrizePoolAwarded) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get randomNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get prize(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PrizePoolOpened extends ethereum.Event {
  get params(): PrizePoolOpened__Params {
    return new PrizePoolOpened__Params(this);
  }
}

export class PrizePoolOpened__Params {
  _event: PrizePoolOpened;

  constructor(event: PrizePoolOpened) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get prizePeriodStartedAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RngServiceUpdated extends ethereum.Event {
  get params(): RngServiceUpdated__Params {
    return new RngServiceUpdated__Params(this);
  }
}

export class RngServiceUpdated__Params {
  _event: RngServiceUpdated;

  constructor(event: RngServiceUpdated) {
    this._event = event;
  }

  get rngService(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SingleRandomWinner extends ethereum.SmartContract {
  static bind(address: Address): SingleRandomWinner {
    return new SingleRandomWinner("SingleRandomWinner", address);
  }

  calculateNextPrizePeriodStartTime(currentTime: BigInt): BigInt {
    let result = super.call(
      "calculateNextPrizePeriodStartTime",
      "calculateNextPrizePeriodStartTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(currentTime)]
    );

    return result[0].toBigInt();
  }

  try_calculateNextPrizePeriodStartTime(
    currentTime: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateNextPrizePeriodStartTime",
      "calculateNextPrizePeriodStartTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(currentTime)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  canCompleteAward(): boolean {
    let result = super.call(
      "canCompleteAward",
      "canCompleteAward():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_canCompleteAward(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "canCompleteAward",
      "canCompleteAward():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  canStartAward(): boolean {
    let result = super.call("canStartAward", "canStartAward():(bool)", []);

    return result[0].toBoolean();
  }

  try_canStartAward(): ethereum.CallResult<boolean> {
    let result = super.tryCall("canStartAward", "canStartAward():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  currentPrize(): BigInt {
    let result = super.call("currentPrize", "currentPrize():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentPrize(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("currentPrize", "currentPrize():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  estimatePrize(): BigInt {
    let result = super.call("estimatePrize", "estimatePrize():(uint256)", []);

    return result[0].toBigInt();
  }

  try_estimatePrize(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "estimatePrize",
      "estimatePrize():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  estimatePrizeWithBlockTime(secondsPerBlockMantissa: BigInt): BigInt {
    let result = super.call(
      "estimatePrizeWithBlockTime",
      "estimatePrizeWithBlockTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(secondsPerBlockMantissa)]
    );

    return result[0].toBigInt();
  }

  try_estimatePrizeWithBlockTime(
    secondsPerBlockMantissa: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "estimatePrizeWithBlockTime",
      "estimatePrizeWithBlockTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(secondsPerBlockMantissa)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  estimateRemainingBlocksToPrize(secondsPerBlockMantissa: BigInt): BigInt {
    let result = super.call(
      "estimateRemainingBlocksToPrize",
      "estimateRemainingBlocksToPrize(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(secondsPerBlockMantissa)]
    );

    return result[0].toBigInt();
  }

  try_estimateRemainingBlocksToPrize(
    secondsPerBlockMantissa: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "estimateRemainingBlocksToPrize",
      "estimateRemainingBlocksToPrize(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(secondsPerBlockMantissa)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  estimateRemainingPrize(): BigInt {
    let result = super.call(
      "estimateRemainingPrize",
      "estimateRemainingPrize():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_estimateRemainingPrize(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "estimateRemainingPrize",
      "estimateRemainingPrize():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  estimateRemainingPrizeWithBlockTime(secondsPerBlockMantissa: BigInt): BigInt {
    let result = super.call(
      "estimateRemainingPrizeWithBlockTime",
      "estimateRemainingPrizeWithBlockTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(secondsPerBlockMantissa)]
    );

    return result[0].toBigInt();
  }

  try_estimateRemainingPrizeWithBlockTime(
    secondsPerBlockMantissa: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "estimateRemainingPrizeWithBlockTime",
      "estimateRemainingPrizeWithBlockTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(secondsPerBlockMantissa)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLastRngLockBlock(): BigInt {
    let result = super.call(
      "getLastRngLockBlock",
      "getLastRngLockBlock():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_getLastRngLockBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLastRngLockBlock",
      "getLastRngLockBlock():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLastRngRequestId(): BigInt {
    let result = super.call(
      "getLastRngRequestId",
      "getLastRngRequestId():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_getLastRngRequestId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLastRngRequestId",
      "getLastRngRequestId():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTrustedForwarder(): Address {
    let result = super.call(
      "getTrustedForwarder",
      "getTrustedForwarder():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getTrustedForwarder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTrustedForwarder",
      "getTrustedForwarder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPrizePeriodOver(): boolean {
    let result = super.call(
      "isPrizePeriodOver",
      "isPrizePeriodOver():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_isPrizePeriodOver(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isPrizePeriodOver",
      "isPrizePeriodOver():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isRngCompleted(): boolean {
    let result = super.call("isRngCompleted", "isRngCompleted():(bool)", []);

    return result[0].toBoolean();
  }

  try_isRngCompleted(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isRngCompleted", "isRngCompleted():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isRngRequested(): boolean {
    let result = super.call("isRngRequested", "isRngRequested():(bool)", []);

    return result[0].toBoolean();
  }

  try_isRngRequested(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isRngRequested", "isRngRequested():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  prizePeriodEndAt(): BigInt {
    let result = super.call(
      "prizePeriodEndAt",
      "prizePeriodEndAt():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_prizePeriodEndAt(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "prizePeriodEndAt",
      "prizePeriodEndAt():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  prizePeriodRemainingSeconds(): BigInt {
    let result = super.call(
      "prizePeriodRemainingSeconds",
      "prizePeriodRemainingSeconds():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_prizePeriodRemainingSeconds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "prizePeriodRemainingSeconds",
      "prizePeriodRemainingSeconds():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  prizePeriodSeconds(): BigInt {
    let result = super.call(
      "prizePeriodSeconds",
      "prizePeriodSeconds():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_prizePeriodSeconds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "prizePeriodSeconds",
      "prizePeriodSeconds():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  prizePeriodStartedAt(): BigInt {
    let result = super.call(
      "prizePeriodStartedAt",
      "prizePeriodStartedAt():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_prizePeriodStartedAt(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "prizePeriodStartedAt",
      "prizePeriodStartedAt():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  prizePool(): Address {
    let result = super.call("prizePool", "prizePool():(address)", []);

    return result[0].toAddress();
  }

  try_prizePool(): ethereum.CallResult<Address> {
    let result = super.tryCall("prizePool", "prizePool():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rng(): Address {
    let result = super.call("rng", "rng():(address)", []);

    return result[0].toAddress();
  }

  try_rng(): ethereum.CallResult<Address> {
    let result = super.tryCall("rng", "rng():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sponsorship(): Address {
    let result = super.call("sponsorship", "sponsorship():(address)", []);

    return result[0].toAddress();
  }

  try_sponsorship(): ethereum.CallResult<Address> {
    let result = super.tryCall("sponsorship", "sponsorship():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ticket(): Address {
    let result = super.call("ticket", "ticket():(address)", []);

    return result[0].toAddress();
  }

  try_ticket(): ethereum.CallResult<Address> {
    let result = super.tryCall("ticket", "ticket():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  versionRecipient(): string {
    let result = super.call(
      "versionRecipient",
      "versionRecipient():(string)",
      []
    );

    return result[0].toString();
  }

  try_versionRecipient(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "versionRecipient",
      "versionRecipient():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class AddExternalErc20AwardCall extends ethereum.Call {
  get inputs(): AddExternalErc20AwardCall__Inputs {
    return new AddExternalErc20AwardCall__Inputs(this);
  }

  get outputs(): AddExternalErc20AwardCall__Outputs {
    return new AddExternalErc20AwardCall__Outputs(this);
  }
}

export class AddExternalErc20AwardCall__Inputs {
  _call: AddExternalErc20AwardCall;

  constructor(call: AddExternalErc20AwardCall) {
    this._call = call;
  }

  get _externalErc20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddExternalErc20AwardCall__Outputs {
  _call: AddExternalErc20AwardCall;

  constructor(call: AddExternalErc20AwardCall) {
    this._call = call;
  }
}

export class AddExternalErc721AwardCall extends ethereum.Call {
  get inputs(): AddExternalErc721AwardCall__Inputs {
    return new AddExternalErc721AwardCall__Inputs(this);
  }

  get outputs(): AddExternalErc721AwardCall__Outputs {
    return new AddExternalErc721AwardCall__Outputs(this);
  }
}

export class AddExternalErc721AwardCall__Inputs {
  _call: AddExternalErc721AwardCall;

  constructor(call: AddExternalErc721AwardCall) {
    this._call = call;
  }

  get _externalErc721(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class AddExternalErc721AwardCall__Outputs {
  _call: AddExternalErc721AwardCall;

  constructor(call: AddExternalErc721AwardCall) {
    this._call = call;
  }
}

export class BeforeTokenMintCall extends ethereum.Call {
  get inputs(): BeforeTokenMintCall__Inputs {
    return new BeforeTokenMintCall__Inputs(this);
  }

  get outputs(): BeforeTokenMintCall__Outputs {
    return new BeforeTokenMintCall__Outputs(this);
  }
}

export class BeforeTokenMintCall__Inputs {
  _call: BeforeTokenMintCall;

  constructor(call: BeforeTokenMintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get controlledToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get referrer(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class BeforeTokenMintCall__Outputs {
  _call: BeforeTokenMintCall;

  constructor(call: BeforeTokenMintCall) {
    this._call = call;
  }
}

export class BeforeTokenTransferCall extends ethereum.Call {
  get inputs(): BeforeTokenTransferCall__Inputs {
    return new BeforeTokenTransferCall__Inputs(this);
  }

  get outputs(): BeforeTokenTransferCall__Outputs {
    return new BeforeTokenTransferCall__Outputs(this);
  }
}

export class BeforeTokenTransferCall__Inputs {
  _call: BeforeTokenTransferCall;

  constructor(call: BeforeTokenTransferCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get controlledToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class BeforeTokenTransferCall__Outputs {
  _call: BeforeTokenTransferCall;

  constructor(call: BeforeTokenTransferCall) {
    this._call = call;
  }
}

export class CompleteAwardCall extends ethereum.Call {
  get inputs(): CompleteAwardCall__Inputs {
    return new CompleteAwardCall__Inputs(this);
  }

  get outputs(): CompleteAwardCall__Outputs {
    return new CompleteAwardCall__Outputs(this);
  }
}

export class CompleteAwardCall__Inputs {
  _call: CompleteAwardCall;

  constructor(call: CompleteAwardCall) {
    this._call = call;
  }
}

export class CompleteAwardCall__Outputs {
  _call: CompleteAwardCall;

  constructor(call: CompleteAwardCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _trustedForwarder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _prizePeriodStart(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _prizePeriodSeconds(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _prizePool(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _ticket(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _sponsorship(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _rng(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _externalErc20s(): Array<Address> {
    return this._call.inputValues[7].value.toAddressArray();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RemoveExternalErc20AwardCall extends ethereum.Call {
  get inputs(): RemoveExternalErc20AwardCall__Inputs {
    return new RemoveExternalErc20AwardCall__Inputs(this);
  }

  get outputs(): RemoveExternalErc20AwardCall__Outputs {
    return new RemoveExternalErc20AwardCall__Outputs(this);
  }
}

export class RemoveExternalErc20AwardCall__Inputs {
  _call: RemoveExternalErc20AwardCall;

  constructor(call: RemoveExternalErc20AwardCall) {
    this._call = call;
  }

  get _externalErc20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _prevExternalErc20(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveExternalErc20AwardCall__Outputs {
  _call: RemoveExternalErc20AwardCall;

  constructor(call: RemoveExternalErc20AwardCall) {
    this._call = call;
  }
}

export class RemoveExternalErc721AwardCall extends ethereum.Call {
  get inputs(): RemoveExternalErc721AwardCall__Inputs {
    return new RemoveExternalErc721AwardCall__Inputs(this);
  }

  get outputs(): RemoveExternalErc721AwardCall__Outputs {
    return new RemoveExternalErc721AwardCall__Outputs(this);
  }
}

export class RemoveExternalErc721AwardCall__Inputs {
  _call: RemoveExternalErc721AwardCall;

  constructor(call: RemoveExternalErc721AwardCall) {
    this._call = call;
  }

  get _externalErc721(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _prevExternalErc721(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveExternalErc721AwardCall__Outputs {
  _call: RemoveExternalErc721AwardCall;

  constructor(call: RemoveExternalErc721AwardCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetRngServiceCall extends ethereum.Call {
  get inputs(): SetRngServiceCall__Inputs {
    return new SetRngServiceCall__Inputs(this);
  }

  get outputs(): SetRngServiceCall__Outputs {
    return new SetRngServiceCall__Outputs(this);
  }
}

export class SetRngServiceCall__Inputs {
  _call: SetRngServiceCall;

  constructor(call: SetRngServiceCall) {
    this._call = call;
  }

  get rngService(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRngServiceCall__Outputs {
  _call: SetRngServiceCall;

  constructor(call: SetRngServiceCall) {
    this._call = call;
  }
}

export class StartAwardCall extends ethereum.Call {
  get inputs(): StartAwardCall__Inputs {
    return new StartAwardCall__Inputs(this);
  }

  get outputs(): StartAwardCall__Outputs {
    return new StartAwardCall__Outputs(this);
  }
}

export class StartAwardCall__Inputs {
  _call: StartAwardCall;

  constructor(call: StartAwardCall) {
    this._call = call;
  }
}

export class StartAwardCall__Outputs {
  _call: StartAwardCall;

  constructor(call: StartAwardCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}