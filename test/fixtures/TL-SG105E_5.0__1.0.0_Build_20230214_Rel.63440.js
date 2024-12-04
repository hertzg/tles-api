export default [
  [
    "SystemInfoRpm.htm",
    'var info_ds = {\ndescriStr:[\n"MY_DEVICE"\n],\nmacStr:[\n"00:00:00:00:00:00"\n],\nipStr:[\n"192.168.0.2"\n],\nnetmaskStr:[\n"255.255.255.0"\n],\ngatewayStr:[\n"192.168.0.1"\n],\nfirmwareStr:[\n"1.0.0 Build 20230214 Rel.63440"\n],\nhardwareStr:[\n"TL-SG105E 5.0"\n]\n};\nvar tip = "";',
    {
      info_ds: {
        descriStr: ["MY_DEVICE"],
        macStr: ["00:00:00:00:00:00"],
        ipStr: ["192.168.0.2"],
        netmaskStr: ["255.255.255.0"],
        gatewayStr: ["192.168.0.1"],
        firmwareStr: ["1.0.0 Build 20230214 Rel.63440"],
        hardwareStr: ["TL-SG105E 5.0"],
      },
      tip: "",
    },
  ],
  [
    "IpSettingRpm.htm",
    'var ip_ds = {\nstate:0,\nvlan:1,\nmaxVlan:4094,\nipStr:[\n"192.168.0.2"\n],\nnetmaskStr:[\n"255.255.255.0"\n],\ngatewayStr:[\n"192.168.0.1"\n]\n};\nvar tip = "";',
    {
      ip_ds: {
        state: 0,
        vlan: 1,
        maxVlan: 4094,
        ipStr: ["192.168.0.2"],
        netmaskStr: ["255.255.255.0"],
        gatewayStr: ["192.168.0.1"],
      },
      tip: "",
    },
  ],
  [
    "TurnOnLEDRpm.htm",
    'var led = 1\nvar tip = "";',
    {
      led: 1,
      tip: "",
    },
  ],
  [
    "UserAccountRpm.htm",
    'var user_ds = {\nuserNameStr:[\n"admin"\n]\n};\nvar tip = "";',
    {
      user_ds: {
        userNameStr: ["admin"],
      },
      tip: "",
    },
  ],
  [
    "ConfigRpm.htm",
    'var tip = "";',
    {
      tip: "",
    },
  ],
  [
    "SystemRebootRpm.htm",
    'var tip="";',
    {
      tip: "",
    },
  ],
  [
    "SystemResetRpm.htm",
    'var tip="";',
    {
      tip: "",
    },
  ],
  [
    "fwupgradephase0.htm",
    'var tip="";',
    {
      tip: "",
    },
  ],
  [
    "PortSettingRpm.htm",
    'var max_port_num = 5;\nvar port_middle_num  = 16;\nvar all_info = {\nstate:[1,1,1,1,1,0,0],\ntrunk_info:[0,0,0,0,0,0,0],\nspd_cfg:[1,1,1,1,1,0,0],\nspd_act:[6,0,0,5,6,0,0],\nfc_cfg:[0,0,0,0,0,0,0],\nfc_act:[0,0,0,0,0,0,0]\n};\nvar tip = "";',
    {
      max_port_num: 5,
      port_middle_num: 16,
      all_info: {
        state: [1, 1, 1, 1, 1, 0, 0],
        trunk_info: [0, 0, 0, 0, 0, 0, 0],
        spd_cfg: [1, 1, 1, 1, 1, 0, 0],
        spd_act: [6, 0, 0, 5, 6, 0, 0],
        fc_cfg: [0, 0, 0, 0, 0, 0, 0],
        fc_act: [0, 0, 0, 0, 0, 0, 0],
      },
      tip: "",
    },
  ],
  [
    "IgmpSnoopingRpm.htm",
    'var igmp_ds = {\nstate:1,\nsuppressionState:0,\ncount:0,\nipStr:[\n\n],\nvlanStr:[\n\n],\nportStr:[\n\n],\nlagMbrs:[\n0x0\n]\n};var tip = "";',
    {
      igmp_ds: {
        state: 1,
        suppressionState: 0,
        count: 0,
        ipStr: [],
        vlanStr: [],
        portStr: [],
        lagMbrs: [0],
      },
      tip: "",
    },
  ],
  [
    "PortTrunkRpm.htm",
    'var trunk_conf = {\nmaxTrunkNum:1,\nportNum:4,\nportStr_g1:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n};\nvar tip = "";',
    {
      trunk_conf: {
        maxTrunkNum: 1,
        portNum: 4,
        portStr_g1: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      },
      tip: "",
    },
  ],
  [
    "PortStatisticsRpm.htm",
    'var max_port_num = 5;\nvar port_middle_num  = 16;\nvar all_info = {\nstate:[1,1,1,1,1,0,0],\nlink_status:[6,0,0,5,6,0,0],\npkts:[117215,0,573082,0,0,0,0,0,0,0,0,0,41805,0,199068,0,691583,0,112155,345,0,0]\n};\nvar tip = "";',
    {
      max_port_num: 5,
      port_middle_num: 16,
      all_info: {
        state: [1, 1, 1, 1, 1, 0, 0],
        link_status: [6, 0, 0, 5, 6, 0, 0],
        pkts: [
          117215, 0, 573082, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41805, 0, 199068, 0,
          691583, 0, 112155, 345, 0, 0,
        ],
      },
      tip: "",
    },
  ],
  [
    "PortMirrorRpm.htm",
    'var max_port_num = 5;\nvar MirrEn = 0;\nvar MirrPort = 0;\nvar porttrunkid = [0,0,0,0,0,0,0]\nvar MirrMode = 0;\nvar mirrMask = 0;\nvar mirr_info= {\ningress:[0,0,0,0,0,0,0],\negress:[0,0,0,0,0,0,0]}\nvar tip = "";',
    {
      max_port_num: 5,
      MirrEn: 0,
      MirrPort: 0,
      porttrunkid: [0, 0, 0, 0, 0, 0, 0],
      MirrMode: 0,
      mirrMask: 0,
      mirr_info: {
        ingress: [0, 0, 0, 0, 0, 0, 0],
        egress: [0, 0, 0, 0, 0, 0, 0],
      },
      tip: "",
    },
  ],
  [
    "CableDiagRpm.htm",
    "var maxPort=5;\nvar cablestate=[-1,-1,-1,-1,-1];\nvar cablelength=[-1,-1,-1,-1,-1];",
    {
      maxPort: 5,
      cablestate: [-1, -1, -1, -1, -1],
      cablelength: [-1, -1, -1, -1, -1],
    },
  ],
  [
    "LoopPreventionRpm.htm",
    'var lpEn=1;\nvar tip="";',
    {
      lpEn: 1,
      tip: "",
    },
  ],
  [
    "VlanMtuRpm.htm",
    'var mtu_ds = {\nstate:0,\nportNum:5,\nuplinkPort:1\n};\nvar tip = "";',
    {
      mtu_ds: {
        state: 0,
        portNum: 5,
        uplinkPort: 1,
      },
      tip: "",
    },
  ],
  [
    "VlanPortBasicRpm.htm",
    'var pvlan_ds = {\nstate:0,\nportNum:5,\nvids:[\n\n],\ncount:0,\nmbrs:[\n\n],\nlagIds:[\n0,0,0,0,0\n],\nlagMbrs:[\n0,0x0\n]\n};var tip = "";',
    {
      pvlan_ds: {
        state: 0,
        portNum: 5,
        vids: [],
        count: 0,
        mbrs: [],
        lagIds: [0, 0, 0, 0, 0],
        lagMbrs: [0, 0],
      },
      tip: "",
    },
  ],
  [
    "Vlan8021QRpm.htm",
    "var qvlan_ds = {\nstate:1,\nportNum:5,\nvids:[\n1,100,200,300,400\n],\ncount:5,\nmaxVids:32,\nnames:[\n'Default','A','B','C','D'\n],\ntagMbrs:[\n0x0,0x10,0x11,0x11,0x10\n],\nuntagMbrs:[\n0x17,0x7,0x0,0x0,0x8\n],\nlagIds:[\n0,0,0,0,0\n],\nlagMbrs:[\n0,0x0\n]\n};var tip = \"\";",
    {
      qvlan_ds: {
        state: 1,
        portNum: 5,
        vids: [1, 100, 200, 300, 400],
        count: 5,
        maxVids: 32,
        names: ["Default", "A", "B", "C", "D"],
        tagMbrs: [0, 16, 17, 17, 16],
        untagMbrs: [23, 7, 0, 0, 8],
        lagIds: [0, 0, 0, 0, 0],
        lagMbrs: [0, 0],
      },
      tip: "",
    },
  ],
  [
    "Vlan8021QPvidRpm.htm",
    'var pvid_ds = {\nstate:1,\nportNum:5,\nvids:[\n1,100,200,300,400\n],\ncount:5,\nmbrs:[\n0x17,0x17,0x11,0x11,0x18\n],\npvids:[\n100,100,100,400,1\n],\nlagIds:[\n0,0,0,0,0\n],\nlagMbrs:[\n0,0x0\n]\n};var tip = "";',
    {
      pvid_ds: {
        state: 1,
        portNum: 5,
        vids: [1, 100, 200, 300, 400],
        count: 5,
        mbrs: [23, 23, 17, 17, 24],
        pvids: [100, 100, 100, 400, 1],
        lagIds: [0, 0, 0, 0, 0],
        lagMbrs: [0, 0],
      },
      tip: "",
    },
  ],
  [
    "QosBasicRpm.htm",
    'var selState = new Array(0,0,0,0,0);\nvar trunk_info = new Array("", " (LAG1)");\nvar pTrunk = new Array(0,0,0,0,0);\nvar pPri = new Array(1,1,1,1,1);\nvar pri_info = new Array("","1(Lowest)","2(Normal)","3(Medium)","4(Highest)","Unknown");\nvar portNumber = 5;\nvar qosMode = 2;\nvar tip = "";',
    {
      selState: [0, 0, 0, 0, 0],
      trunk_info: ["", " (LAG1)"],
      pTrunk: [0, 0, 0, 0, 0],
      pPri: [1, 1, 1, 1, 1],
      pri_info: [
        "",
        "1(Lowest)",
        "2(Normal)",
        "3(Medium)",
        "4(Highest)",
        "Unknown",
      ],
      portNumber: 5,
      qosMode: 2,
      tip: "",
    },
  ],
  [
    "QosBandWidthControlRpm.htm",
    'var selState = new Array(0,0,0,0,0);\nvar trunk_info = new Array("", " (LAG1)");\nvar portNumber = 5;\nvar bcInfo = new Array(\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0);\nvar tip = "";',
    {
      selState: [0, 0, 0, 0, 0],
      trunk_info: ["", " (LAG1)"],
      portNumber: 5,
      bcInfo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      tip: "",
    },
  ],
  [
    "QosStormControlRpm.htm",
    'var selState = new Array(0,0,0,0,0);\nvar trunk_info = new Array("", " (LAG1)");\nvar portNumber = 5;\nvar scInfo = new Array(\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0);\nvar tip = "";',
    {
      selState: [0, 0, 0, 0, 0],
      trunk_info: ["", " (LAG1)"],
      portNumber: 5,
      scInfo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      tip: "",
    },
  ],
];
