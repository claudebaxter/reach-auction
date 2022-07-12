// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      4: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bidder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v219, v220, v221], secs: v223, time: v222, didSend: v36, from: v218 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v233, time: v232, didSend: v43, from: v231 } = txn2;
  ;
  ;
  const v243 = stdlib.addressEq(v218, v231);
  stdlib.assert(v243, {
    at: './index.rsh:29:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bidder'
    });
  const v245 = stdlib.add(v222, v221);
  const v247 = [v219, v220, v245];
  stdlib.protect(ctc2, await interact.seeParams(v247), {
    at: './index.rsh:32:28:application',
    fs: ['at ./index.rsh:32:28:application call to [unknown function] (defined at: ./index.rsh:32:28:function exp)', 'at ./index.rsh:32:28:application call to "liftedInteract" (defined at: ./index.rsh:32:28:application)'],
    msg: 'seeParams',
    who: 'Bidder'
    });
  
  let v248 = v220;
  let v249 = v218;
  let v250 = stdlib.checkedBigNumberify('./index.rsh:35:31:decimal', stdlib.UInt_max, '0');
  let v251 = v232;
  let v252 = v222;
  
  while (await (async () => {
    const v266 = stdlib.le(v252, v245);
    
    return v266;})()) {
    const v271 = ctc.selfAddress();
    const v273 = stdlib.addressEq(v249, v271);
    let v275;
    if (v273) {
      const v279 = ['None', null];
      v275 = v279;
      }
    else {
      const v276 = stdlib.protect(ctc3, await interact.getBid(v248), {
        at: './index.rsh:41:41:application',
        fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:9:function exp)', 'at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:9:function exp)'],
        msg: 'getBid',
        who: 'Bidder'
        });
      v275 = v276;
      }
    let v280;
    switch (v275[0]) {
      case 'None': {
        const v281 = v275[1];
        v280 = false;
        
        break;
        }
      case 'Some': {
        const v282 = v275[1];
        const v283 = stdlib.gt(v282, v248);
        v280 = v283;
        
        break;
        }
      }
    const v284 = stdlib.fromSome(v275, stdlib.checkedBigNumberify('./index.rsh:45:34:decimal', stdlib.UInt_max, '0'));
    
    const txn3 = await (ctc.sendrecv({
      args: [v218, v219, v245, v248, v249, v250, v251, v284],
      evt_cnt: 1,
      funcNum: 3,
      lct: v251,
      onlyIf: v280,
      out_tys: [ctc1],
      pay: [v284, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v287], secs: v289, time: v288, didSend: v117, from: v286 } = txn3;
        
        sim_r.txns.push({
          amt: v287,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v249,
          tok: undefined /* Nothing */
          });
        const cv248 = v287;
        const cv249 = v286;
        const cv250 = v287;
        const cv251 = v288;
        const cv252 = v251;
        
        await (async () => {
          const v248 = cv248;
          const v249 = cv249;
          const v250 = cv250;
          const v251 = cv251;
          const v252 = cv252;
          
          if (await (async () => {
            const v266 = stdlib.le(v252, v245);
            
            return v266;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v218,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v249,
              tok: v219
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v219
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v245],
      tys: [ctc4, ctc0, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v303, time: v302, didSend: v148, from: v301 } = txn4;
      ;
      const v304 = stdlib.addressEq(v218, v301);
      stdlib.assert(v304, {
        at: './index.rsh:57:17:dot',
        fs: ['at ./index.rsh:55:38:application call to [unknown function] (defined at: ./index.rsh:55:38:function exp)'],
        msg: 'sender correct',
        who: 'Bidder'
        });
      const cv248 = v248;
      const cv249 = v249;
      const cv250 = v250;
      const cv251 = v302;
      const cv252 = v251;
      
      v248 = cv248;
      v249 = cv249;
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      
      continue;
      }
    else {
      const {data: [v287], secs: v289, time: v288, didSend: v117, from: v286 } = txn3;
      ;
      const v293 = stdlib.gt(v287, v248);
      stdlib.assert(v293, {
        at: './index.rsh:50:18:application',
        fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:16:function exp)'],
        msg: null,
        who: 'Bidder'
        });
      ;
      const cv248 = v287;
      const cv249 = v286;
      const cv250 = v287;
      const cv251 = v288;
      const cv252 = v251;
      
      v248 = cv248;
      v249 = cv249;
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc2, await interact.showOutcome(v249), {
    at: './index.rsh:64:53:application',
    fs: ['at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:30:function exp)'],
    msg: 'showOutcome',
    who: 'Bidder'
    });
  
  return;
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v211 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:24:77:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v212 = v211[stdlib.checkedBigNumberify('./index.rsh:24:77:application', stdlib.UInt_max, '0')];
  const v213 = v211[stdlib.checkedBigNumberify('./index.rsh:24:77:application', stdlib.UInt_max, '1')];
  const v214 = v211[stdlib.checkedBigNumberify('./index.rsh:24:77:application', stdlib.UInt_max, '2')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v212, v213, v214],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v219, v220, v221], secs: v223, time: v222, didSend: v36, from: v218 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v219
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v219, v220, v221], secs: v223, time: v222, didSend: v36, from: v218 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v218, v219, v220, v221, v222],
    evt_cnt: 0,
    funcNum: 1,
    lct: v222,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:27:15:decimal', stdlib.UInt_max, '1'), v219]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v233, time: v232, didSend: v43, from: v231 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:27:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v219
        });
      const v245 = stdlib.add(v222, v221);
      const v248 = v220;
      const v249 = v218;
      const v250 = stdlib.checkedBigNumberify('./index.rsh:35:31:decimal', stdlib.UInt_max, '0');
      const v251 = v232;
      const v252 = v222;
      
      if (await (async () => {
        const v266 = stdlib.le(v252, v245);
        
        return v266;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v218,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v249,
          tok: v219
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v219
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v233, time: v232, didSend: v43, from: v231 } = txn2;
  ;
  ;
  const v243 = stdlib.addressEq(v218, v231);
  stdlib.assert(v243, {
    at: './index.rsh:29:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v245 = stdlib.add(v222, v221);
  let v248 = v220;
  let v249 = v218;
  let v250 = stdlib.checkedBigNumberify('./index.rsh:35:31:decimal', stdlib.UInt_max, '0');
  let v251 = v232;
  let v252 = v222;
  
  while (await (async () => {
    const v266 = stdlib.le(v252, v245);
    
    return v266;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc1],
      timeoutAt: ['time', v245],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      stdlib.protect(ctc3, await interact.timeout(), {
        at: './index.rsh:56:33:application',
        fs: ['at ./index.rsh:56:33:application call to [unknown function] (defined at: ./index.rsh:56:33:function exp)', 'at ./index.rsh:56:33:application call to "liftedInteract" (defined at: ./index.rsh:56:33:application)', 'at ./index.rsh:55:38:application call to [unknown function] (defined at: ./index.rsh:55:38:function exp)'],
        msg: 'timeout',
        who: 'Creator'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v218, v219, v245, v248, v249, v250, v251],
        evt_cnt: 0,
        funcNum: 4,
        lct: v251,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:57:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v303, time: v302, didSend: v148, from: v301 } = txn4;
          
          ;
          const cv248 = v248;
          const cv249 = v249;
          const cv250 = v250;
          const cv251 = v302;
          const cv252 = v251;
          
          await (async () => {
            const v248 = cv248;
            const v249 = cv249;
            const v250 = cv250;
            const v251 = cv251;
            const v252 = cv252;
            
            if (await (async () => {
              const v266 = stdlib.le(v252, v245);
              
              return v266;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v218,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v249,
                tok: v219
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v219
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc1, ctc1, ctc4, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v303, time: v302, didSend: v148, from: v301 } = txn4;
      ;
      const v304 = stdlib.addressEq(v218, v301);
      stdlib.assert(v304, {
        at: './index.rsh:57:17:dot',
        fs: ['at ./index.rsh:55:38:application call to [unknown function] (defined at: ./index.rsh:55:38:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv248 = v248;
      const cv249 = v249;
      const cv250 = v250;
      const cv251 = v302;
      const cv252 = v251;
      
      v248 = cv248;
      v249 = cv249;
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      
      continue;
      }
    else {
      const {data: [v287], secs: v289, time: v288, didSend: v117, from: v286 } = txn3;
      ;
      const v293 = stdlib.gt(v287, v248);
      stdlib.assert(v293, {
        at: './index.rsh:50:18:application',
        fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:16:function exp)'],
        msg: null,
        who: 'Creator'
        });
      ;
      stdlib.protect(ctc3, await interact.seeBid(v286, v287), {
        at: './index.rsh:52:34:application',
        fs: ['at ./index.rsh:52:34:application call to [unknown function] (defined at: ./index.rsh:52:34:function exp)', 'at ./index.rsh:52:34:application call to "liftedInteract" (defined at: ./index.rsh:52:34:application)', 'at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:16:function exp)'],
        msg: 'seeBid',
        who: 'Creator'
        });
      
      const cv248 = v287;
      const cv249 = v286;
      const cv250 = v287;
      const cv251 = v288;
      const cv252 = v251;
      
      v248 = cv248;
      v249 = cv249;
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc3, await interact.showOutcome(v249), {
    at: './index.rsh:64:53:application',
    fs: ['at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:30:function exp)'],
    msg: 'showOutcome',
    who: 'Creator'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAKAAEEKCAwCFhgoI0GJgIBAAAiNQAxGEECoSlkSSJbNQEhBls1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQMMQADOSSQMQABXJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEkSc087AyBjT+D0Q0/zEAEkQ0/zQDIQRbNP40AyEFWzQDVzggNAMhB1syBjQDIQhbQgFFSCQ0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQUXNf6ABNQMbNY0/hZQsDIGNP8MRDT+iAH9NP40AyEFWw1EsSKyATQDIQdbsggjshA0A1c4ILIHszQDVwAgNAMhBFs0/zT+MQA0/jIGNAMhCFtCANRJIwxAAFYjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf6BOFs1/YAEmouRdLAjNP6IAZ40/zEAEkQ0/zT+NP00AyEFWwg0AyVbNP8iMgY0/UIAeEghCYgBYCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBls1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJiAElsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQMgYWUChLAVcAQGdIIzUBMgY1AkIAnDX/Nf41/TX8Nfs1+jX5Nfg0/zT6DkEAKzT4NPkWUDT6FlA0+xZQNPxQNP0WUDT+FlAoSwFXAGhnSCQ1ATIGNQJCAFmxIrIBNP2yCCOyEDT4sgezsSKyASOyEiSyEDT8shQ0+bIRs7EisgEishIkshAyCbIVMgqyFDT5shGzQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 104,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v219",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v220",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v221",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v219",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v220",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v221",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v287",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v287",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620012c6380380620012c683398101604081905262000026916200028b565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000184565b620000e36040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825293518401516060808901918252436080808b0182815260016000819055929092558751808a019a909a5294519095168887015291519187019190915251908501525160a0808501919091528151808503909101815260c0909301905281516200017b926002920190620001ae565b50505062000374565b81620001aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001bc9062000337565b90600052602060002090601f016020900481019282620001e057600085556200022b565b82601f10620001fb57805160ff19168380011785556200022b565b828001600101855582156200022b579182015b828111156200022b5782518255916020019190600101906200020e565b50620002399291506200023d565b5090565b5b808211156200023957600081556001016200023e565b604051606081016001600160401b03811182821017156200028557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029f57600080fd5b604080519081016001600160401b0381118282101715620002d057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ea57600080fd5b620002f462000254565b60208501519092506001600160a01b03811681146200031257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200034c57607f821691505b602082108114156200036e57634e487b7160e01b600052602260045260246000fd5b50919050565b610f4280620003846000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780638323075714610096578063a7661d54146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610c61565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610c61565b6102cb565b3480156100ca57600080fd5b506100d3610483565b60405161007a929190610cad565b61005d6100ef366004610c61565b610520565b610104600160005414600b61071f565b61011e8135158061011757506001548235145b600c61071f565b60008080556002805461013090610ce7565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610ce7565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610d38565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f4929190610dd0565b60405180910390a16102083415600861071f565b61022261021b3383602001516001610749565b600961071f565b805161023a906001600160a01b03163314600a61071f565b610242610b2c565b815181516001600160a01b03918216905260208084015183519216910152606082015160808301516102749190610e08565b8151604090810191909152828101516020808401805192909252845182516001600160a01b0390911691015280516000920191909152805143606090910152608080840151915101526102c681610761565b505050565b6102db600460005414601461071f565b6102f5813515806102ee57506001548235145b601561071f565b60008080556002805461030790610ce7565b80601f016020809104026020016040519081016040528092919081815260200182805461033390610ce7565b80156103805780601f1061035557610100808354040283529160200191610380565b820191906000526020600020905b81548152906001019060200180831161036357829003601f168201915b50505050508060200190518101906103989190610e2e565b90506103ac8160400151431015601661071f565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516103dd929190610dd0565b60405180910390a16103f13415601261071f565b8051610409906001600160a01b03163314601361071f565b610411610b2c565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015260608086015183860180519190915260808088015182519616959094019490945260a086015184519092019190915282514391015260c0840151915101526102c681610761565b60006060600054600280805461049890610ce7565b80601f01602080910402602001604051908101604052809291908181526020018280546104c490610ce7565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b50505050509050915091509091565b610530600460005414600f61071f565b61054a8135158061054357506001548235145b601061071f565b60008080556002805461055c90610ce7565b80601f016020809104026020016040519081016040528092919081815260200182805461058890610ce7565b80156105d55780601f106105aa576101008083540402835291602001916105d5565b820191906000526020600020905b8154815290600101906020018083116105b857829003601f168201915b50505050508060200190518101906105ed9190610e2e565b905061060081604001514310601161071f565b6040805133815283356020808301919091528401358183015290517f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc19181900360600190a161065634602084013514600d61071f565b606081015161066c90602084013511600e61071f565b80608001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156106ad573d6000803e3d6000fd5b506106b6610b2c565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201528183018051868401359081905281513394019390935280519091019190915280514360609091015260c08301519051608001526102c681610761565b816107455760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600061075783853085610932565b90505b9392505050565b805160400151602082015160800151116108b9576107d06040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518185015281850180515160608087019190915281518401519094166080860152805182015160a0860152519092015160c084015260046000554360015590516108959183910181516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906102c6929190610b7a565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108fc573d6000803e3d6000fd5b506109198160000151602001518260200151602001516001610a0c565b6000808055600181905561092f90600290610bfe565b50565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161099991610ed3565b60006040518083038185875af1925050503d80600081146109d6576040519150601f19603f3d011682016040523d82523d6000602084013e6109db565b606091505b50915091506109ec82826001610a20565b5080806020019051810190610a019190610eef565b979650505050505050565b610a17838383610a5b565b6102c657600080fd5b60608315610a2f57508161075a565b825115610a3f5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161073c565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610aba91610ed3565b60006040518083038185875af1925050503d8060008114610af7576040519150601f19603f3d011682016040523d82523d6000602084013e610afc565b606091505b5091509150610b0d82826002610a20565b5080806020019051810190610b229190610eef565b9695505050505050565b6040805160a080820183526000828401818152606080850183905260808086018490529185528551938401865282845260208481018490529584018390528301829052820152909182015290565b828054610b8690610ce7565b90600052602060002090601f016020900481019282610ba85760008555610bee565b82601f10610bc157805160ff1916838001178555610bee565b82800160010185558215610bee579182015b82811115610bee578251825591602001919060010190610bd3565b50610bfa929150610c34565b5090565b508054610c0a90610ce7565b6000825580601f10610c1a575050565b601f01602090049060005260206000209081019061092f91905b5b80821115610bfa5760008155600101610c35565b600060408284031215610c5b57600080fd5b50919050565b600060408284031215610c7357600080fd5b61075a8383610c49565b60005b83811015610c98578181015183820152602001610c80565b83811115610ca7576000848401525b50505050565b8281526040602082015260008251806040840152610cd2816060850160208701610c7d565b601f01601f1916919091016060019392505050565b600181811c90821680610cfb57607f821691505b60208210811415610c5b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610d3357600080fd5b919050565b600060a08284031215610d4a57600080fd5b60405160a0810181811067ffffffffffffffff82111715610d7b57634e487b7160e01b600052604160045260246000fd5b604052610d8783610d1c565b8152610d9560208401610d1c565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b801515811461092f57600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610df881610dc2565b8015156040840152509392505050565b60008219821115610e2957634e487b7160e01b600052601160045260246000fd5b500190565b600060e08284031215610e4057600080fd5b60405160e0810181811067ffffffffffffffff82111715610e7157634e487b7160e01b600052604160045260246000fd5b604052610e7d83610d1c565b8152610e8b60208401610d1c565b60208201526040830151604082015260608301516060820152610eb060808401610d1c565b608082015260a083015160a082015260c083015160c08201528091505092915050565b60008251610ee5818460208701610c7d565b9190910192915050565b600060208284031215610f0157600080fd5b815161075a81610dc256fea2646970667358221220d76ffa7c54a1ae4de815a0306ae81f1e3d72df111f3c75892a6bbc1d79187db064736f6c634300080c0033`,
  BytecodeLen: 4806,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:62:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:35:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder": Bidder,
  "Creator": Creator
  };
export const _APIs = {
  };
