export default [
  [
    "SystemInfoRpm.htm",
    'var info_ds = {\ndescriStr:[\n"MY_DEVICE"\n],\nmacStr:[\n"00:00:00:00:00:00"\n],\nipStr:[\n"192.168.0.2"\n],\nnetmaskStr:[\n"255.255.255.0"\n],\ngatewayStr:[\n"192.168.0.1"\n],\nfirmwareStr:[\n"1.0.0 Build 20230219 Rel.70930"\n],\nhardwareStr:[\n"TL-SG1016PE 3.0"\n]\n};\nvar tip = "";',
    {
      info_ds: {
        descriStr: ["MY_DEVICE"],
        macStr: ["00:00:00:00:00:00"],
        ipStr: ["192.168.0.2"],
        netmaskStr: ["255.255.255.0"],
        gatewayStr: ["192.168.0.1"],
        firmwareStr: ["1.0.0 Build 20230219 Rel.70930"],
        hardwareStr: ["TL-SG1016PE 3.0"],
      },
      tip: "",
    },
  ],
  [
    "IpSettingRpm.htm",
    'var ip_ds = {\nstate:1,\nipStr:[\n"192.168.0.2"\n],\nnetmaskStr:[\n"255.255.255.0"\n],\ngatewayStr:[\n"192.168.0.1"\n]\n};\nvar tip = "";',
    {
      ip_ds: {
        state: 1,
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
  ["SystemRebootRpm.htm", null, {}],
  ["SystemResetRpm.htm", null, {}],
  [
    "fwupgradephase0.htm",
    'var upgrade_ds = {\nfirmwareStr:[\n"1.0.0 Build 20230219 Rel.70930"\n],\nhardwareStr:[\n"TL-SG1016PE 3.0"\n]\n};',
    {
      upgrade_ds: {
        firmwareStr: ["1.0.0 Build 20230219 Rel.70930"],
        hardwareStr: ["TL-SG1016PE 3.0"],
      },
    },
  ],
  [
    "PortSettingRpm.htm",
    'var max_port_num = 16;\nvar port_middle_num  = 16;\nvar all_info = {\nstate:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],\ntrunk_info:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nspd_cfg:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],\nspd_act:[6,6,5,0,0,5,0,0,0,0,0,0,0,0,6,0,0,0],\nfc_cfg:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nfc_act:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nsfp_port:[]\n};\nvar tip = "";',
    {
      max_port_num: 16,
      port_middle_num: 16,
      all_info: {
        state: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        trunk_info: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        spd_cfg: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        spd_act: [6, 6, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
        fc_cfg: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fc_act: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sfp_port: [],
      },
      tip: "",
    },
  ],
  [
    "IgmpSnoopingRpm.htm",
    'var igmp_ds = {\nstate:1,\nsuppressionState:0,\ncount:0,\nipStr:[\n\n],\nvlanStr:[\n\n],\nportStr:[\n\n],\nlagMbrs:[\n0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0\n]\n};var tip = "";',
    {
      igmp_ds: {
        state: 1,
        suppressionState: 0,
        count: 0,
        ipStr: [],
        vlanStr: [],
        portStr: [],
        lagMbrs: [0, 0, 0, 0, 0, 0, 0, 0],
      },
      tip: "",
    },
  ],
  [
    "PortTrunkRpm.htm",
    'var trunk_conf = {\nmaxTrunkNum:8,\nportNum:16,\nportStr_g1:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nportStr_g2:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nportStr_g3:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nportStr_g4:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nportStr_g5:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nportStr_g6:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nportStr_g7:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\nportStr_g8:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n};\nvar tip = "";',
    {
      trunk_conf: {
        maxTrunkNum: 8,
        portNum: 16,
        portStr_g1: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        portStr_g2: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        portStr_g3: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        portStr_g4: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        portStr_g5: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        portStr_g6: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        portStr_g7: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        portStr_g8: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      },
      tip: "",
    },
  ],
  [
    "PortStatisticsRpm.htm",
    'var max_port_num = 16;\nvar port_middle_num  = 16;\nvar all_info = {\nstate:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],\nlink_status:[6,6,5,0,0,5,0,0,0,0,0,0,0,0,6,0,0,0],\npkts:[121451471,0,55622490,0,5304435,0,519805,0,574383398,0,980637293,1,0,0,0,0,0,0,0,0,1094731345,0,1952914929,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2990319346,0,1779787034,0,0,0,0,0,0,0]\n};\nvar tip = "";',
    {
      max_port_num: 16,
      port_middle_num: 16,
      all_info: {
        state: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        link_status: [6, 6, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
        pkts: [
          121451471, 0, 55622490, 0, 5304435, 0, 519805, 0, 574383398, 0,
          980637293, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1094731345, 0, 1952914929, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 2990319346, 0, 1779787034, 0, 0, 0, 0, 0, 0,
          0,
        ],
      },
      tip: "",
    },
  ],
  [
    "PortMirrorRpm.htm",
    'var max_port_num = 16;\nvar MirrEn = 0;\nvar MirrPort = 0;\nvar porttrunkid = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\nvar MirrMode = 0;\nvar mirrMask = 0;\nvar mirr_info= {\ningress:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\negress:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\nvar tip = "";',
    {
      max_port_num: 16,
      MirrEn: 0,
      MirrPort: 0,
      porttrunkid: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      MirrMode: 0,
      mirrMask: 0,
      mirr_info: {
        ingress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        egress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      tip: "",
    },
  ],
  [
    "CableDiagRpm.htm",
    "var maxPort=16;\nvar cablestate=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];\nvar cablelength=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];",
    {
      maxPort: 16,
      cablestate: [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ],
      cablelength: [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      ],
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
    'var mtu_ds = {\nstate:0,\nportNum:16,\nuplinkPort:1\n};\nvar tip = "";',
    {
      mtu_ds: {
        state: 0,
        portNum: 16,
        uplinkPort: 1,
      },
      tip: "",
    },
  ],
  [
    "VlanPortBasicRpm.htm",
    'var pvlan_ds = {\nstate:0,\nportNum:16,\nvids:[\n\n],\ncount:0,\nmbrs:[\n\n],\nlagIds:[\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\n],\nlagMbrs:[\n0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0\n]\n};var tip = "";',
    {
      pvlan_ds: {
        state: 0,
        portNum: 16,
        vids: [],
        count: 0,
        mbrs: [],
        lagIds: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        lagMbrs: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      tip: "",
    },
  ],
  [
    "Vlan8021QRpm.htm",
    "var qvlan_ds = {\nstate:1,\nportNum:16,\nvids:[\n1,100\n],\ncount:2,\nmaxVids:32,\nnames:[\n'Default','A'\n],\ntagMbrs:[\n0x0,0x4002\n],\nuntagMbrs:[\n0xFFFF,0x0\n],\nlagIds:[\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\n],\nlagMbrs:[\n0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0\n]\n};var tip = \"\";",
    {
      qvlan_ds: {
        state: 1,
        portNum: 16,
        vids: [1, 100],
        count: 2,
        maxVids: 32,
        names: ["Default", "A"],
        tagMbrs: [0, 16386],
        untagMbrs: [65535, 0],
        lagIds: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        lagMbrs: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      tip: "",
    },
  ],
  [
    "Vlan8021QPvidRpm.htm",
    'var pvid_ds = {\nstate:1,\nportNum:16,\nvids:[\n1,2364\n],\ncount:2,\nmbrs:[\n0xFFFF,0x4002\n],\npvids:[\n1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1\n],\nlagIds:[\n0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\n],\nlagMbrs:[\n0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0\n]\n};var tip = "";',
    {
      pvid_ds: {
        state: 1,
        portNum: 16,
        vids: [1, 2364],
        count: 2,
        mbrs: [65535, 16386],
        pvids: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        lagIds: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        lagMbrs: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      tip: "",
    },
  ],
  [
    "QosBasicRpm.htm",
    'var selState = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);\nvar trunk_info = new Array("", " (LAG1)", " (LAG2)", " (LAG3)", " (LAG4)", " (LAG5)", " (LAG6)", " (LAG7)", " (LAG8)");\nvar pTrunk = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);\nvar pPri = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);\nvar pri_info = new Array("","1(Lowest)","2(Normal)","3(Medium)","4(Highest)","Unknown");\nvar portNumber = 16;\nvar qosMode = 2;\nvar tip = "";',
    {
      selState: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      trunk_info: [
        "",
        " (LAG1)",
        " (LAG2)",
        " (LAG3)",
        " (LAG4)",
        " (LAG5)",
        " (LAG6)",
        " (LAG7)",
        " (LAG8)",
      ],
      pTrunk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      pPri: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      pri_info: [
        "",
        "1(Lowest)",
        "2(Normal)",
        "3(Medium)",
        "4(Highest)",
        "Unknown",
      ],
      portNumber: 16,
      qosMode: 2,
      tip: "",
    },
  ],
  [
    "QosBandWidthControlRpm.htm",
    'var selState = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);\nvar trunk_info = new Array("", " (LAG1)", " (LAG2)", " (LAG3)", " (LAG4)", " (LAG5)", " (LAG6)", " (LAG7)", " (LAG8)");\nvar portNumber = 16;\nvar bcInfo = new Array(\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0);\nvar tip = "";',
    {
      selState: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      trunk_info: [
        "",
        " (LAG1)",
        " (LAG2)",
        " (LAG3)",
        " (LAG4)",
        " (LAG5)",
        " (LAG6)",
        " (LAG7)",
        " (LAG8)",
      ],
      portNumber: 16,
      bcInfo: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
      ],
      tip: "",
    },
  ],
  [
    "QosStormControlRpm.htm",
    'var selState = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);\nvar trunk_info = new Array("", " (LAG1)", " (LAG2)", " (LAG3)", " (LAG4)", " (LAG5)", " (LAG6)", " (LAG7)", " (LAG8)");\nvar portNumber = 16;\nvar scInfo = new Array(\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0,0,0,\n0);\nvar tip = "";',
    {
      selState: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      trunk_info: [
        "",
        " (LAG1)",
        " (LAG2)",
        " (LAG3)",
        " (LAG4)",
        " (LAG5)",
        " (LAG6)",
        " (LAG7)",
        " (LAG8)",
      ],
      portNumber: 16,
      scInfo: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
      ],
      tip: "",
    },
  ],
  [
    "PoeConfigRpm.htm",
    'var poe_port_num = 8;\nvar selState = new Array(0,0,0,0,0,0,0,0);\nvar globalConfig = {\nsystem_power_limit:1500,\nsystem_power_limit_min:10,\nsystem_power_limit_max:1500,\nsystem_power_consumption:267,\nsystem_power_remain:1233\n};\nvar portConfig ={\nstate:[1,1,1,1,1,1,1,1],\npriority:[2,2,2,2,2,2,2,2],\npowerlimit:[300,330,300,300,300,300,300,300],\npower:[28,50,28,0,0,161,0,0],\ncurrent:[54,95,54,0,0,306,0,0],\nvoltage:[529,529,529,0,0,529,0,0],\npdclass:[300,330,300,331,331,300,331,331],\npowerstatus:[2,2,2,0,0,2,0,0]\n};\nvar tip = "";',
    {
      poe_port_num: 8,
      selState: [0, 0, 0, 0, 0, 0, 0, 0],
      globalConfig: {
        system_power_limit: 1500,
        system_power_limit_min: 10,
        system_power_limit_max: 1500,
        system_power_consumption: 267,
        system_power_remain: 1233,
      },
      portConfig: {
        state: [1, 1, 1, 1, 1, 1, 1, 1],
        priority: [2, 2, 2, 2, 2, 2, 2, 2],
        powerlimit: [300, 330, 300, 300, 300, 300, 300, 300],
        power: [28, 50, 28, 0, 0, 161, 0, 0],
        current: [54, 95, 54, 0, 0, 306, 0, 0],
        voltage: [529, 529, 529, 0, 0, 529, 0, 0],
        pdclass: [300, 330, 300, 331, 331, 300, 331, 331],
        powerstatus: [2, 2, 2, 0, 0, 2, 0, 0],
      },
      tip: "",
    },
  ],
  [
    "poeRecoveryRpm.htm",
    'var poe_port_num = 8;\nvar selState = new Array(0,0,0,0,0,0,0,0);\nvar globalRecoveryConfig = {\nglobal_status:0\n};\nvar portRecoveryConfig ={\nip:["","","","","","","",""],\nstartup:[60,60,60,60,60,60,60,60],\ninterval:[60,60,60,60,60,60,60,60],\nretry:[5,5,5,5,5,5,5,5],\nreboot:[15,15,15,15,15,15,15,15],\nfailure:[0,0,0,0,0,0,0,0],\nrestart:[0,0,0,0,0,0,0,0],\ntotal:[0,0,0,0,0,0,0,0],\nstatus:[0,0,0,0,0,0,0,0],\n};\nvar tip = "";',
    {
      poe_port_num: 8,
      selState: [0, 0, 0, 0, 0, 0, 0, 0],
      globalRecoveryConfig: {
        global_status: 0,
      },
      portRecoveryConfig: {
        ip: ["", "", "", "", "", "", "", ""],
        startup: [60, 60, 60, 60, 60, 60, 60, 60],
        interval: [60, 60, 60, 60, 60, 60, 60, 60],
        retry: [5, 5, 5, 5, 5, 5, 5, 5],
        reboot: [15, 15, 15, 15, 15, 15, 15, 15],
        failure: [0, 0, 0, 0, 0, 0, 0, 0],
        restart: [0, 0, 0, 0, 0, 0, 0, 0],
        total: [0, 0, 0, 0, 0, 0, 0, 0],
        status: [0, 0, 0, 0, 0, 0, 0, 0],
      },
      tip: "",
    },
  ],
  [
    "poeExtendRpm.htm",
    'var poe_port_num = 8;\nvar selState = new Array(0,0,0,0,0,0,0,0);\nvar poeExtendConfig ={\nstatus:[0,0,0,0,0,0,0,0],\n};\nvar tip = "";',
    {
      poe_port_num: 8,
      selState: [0, 0, 0, 0, 0, 0, 0, 0],
      poeExtendConfig: {
        status: [0, 0, 0, 0, 0, 0, 0, 0],
      },
      tip: "",
    },
  ],
];
