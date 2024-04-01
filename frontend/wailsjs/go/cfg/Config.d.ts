// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {cfg} from '../models';
import {sync} from '../models';

export function AddFilterList(arg1:cfg.FilterList):Promise<string>;

export function GetCAInstalled():Promise<boolean>;

export function GetFilterLists():Promise<Array<cfg.FilterList>>;

export function GetIgnoredHosts():Promise<Array<string>>;

export function GetPort():Promise<number>;

export function GetVersion():Promise<string>;

export function Lock():Promise<void>;

export function RLock():Promise<void>;

export function RLocker():Promise<sync.Locker>;

export function RUnlock():Promise<void>;

export function RemoveFilterList(arg1:string):Promise<string>;

export function RunMigrations():Promise<void>;

export function Save():Promise<void>;

export function SetCAInstalled(arg1:boolean):Promise<void>;

export function SetIgnoredHosts(arg1:Array<string>):Promise<void>;

export function SetPort(arg1:number):Promise<string>;

export function ToggleFilterList(arg1:string,arg2:boolean):Promise<string>;

export function TryLock():Promise<boolean>;

export function TryRLock():Promise<boolean>;

export function Unlock():Promise<void>;
