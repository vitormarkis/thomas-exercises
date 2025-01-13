export function isObject(item) {
  if (!item) return false
  return Object.getPrototypeOf(item) === Object.prototype
}

const config = {
  input: {
    label: "label_0",
    custom_label: null,
    debug: false,
    input_type: "generate",
    mapping:
      '\nroot = [\n    {"update": 1,  "category": "a"},\n    {"update": 2,  "category": "a"},\n    {"update": 3,  "category": "b"},\n    {"update": 4,  "category": "a"},\n    {"update": 5,  "category": "a"},\n    {"update": 6,  "category": "b"},\n    {"update": 7,  "category": "a"},\n    {"update": 8,  "category": "a"},\n    {"update": 9,  "category": "b"},\n    {"update": 10, "category": "a"},\n    {"update": 11, "category": "a"},\n    {"update": 12, "category": "b"}\n]\n',
    interval: "10s",
    count: 10,
    batch_size: 1,
    auto_replay_nacks: true,
  },
  processors: [
    {
      label: "label_1",
      custom_label: null,
      debug: false,
      processor_type: "unarchive",
      format: "json_array",
    },
    {
      label: "label_2",
      custom_label: null,
      debug: false,
      processor_type: "for_each",
      processors: [
        {
          label: "label_3",
          custom_label: null,
          debug: false,
          processor_type: "sleep",
          duration: "100ms",
        },
        {
          label: "label_4",
          custom_label: null,
          debug: true,
          processor_type: "online_statistics",
          name: "model_5d6e096a",
          write_mode: "replace",
          entries: [
            {
              on: "update",
              by: null,
              using: {
                component_type: "univariate",
                component: {
                  component_type: "mean",
                },
              },
            },
            {
              on: "update",
              by: null,
              using: {
                component_type: "univariate",
                component: {
                  component_type: "rolling_max",
                  window_size: 3,
                },
              },
            },
            {
              on: "update",
              by: null,
              using: {
                component_type: "univariate",
                component: {
                  component_type: "rolling_min",
                  window_size: 4,
                },
              },
            },
            {
              on: "update",
              by: ["category"],
              using: {
                component_type: "univariate",
                component: {
                  component_type: "rolling_max",
                  window_size: 2,
                },
              },
            },
            {
              on: "update",
              by: ["category"],
              using: {
                component_type: "univariate",
                component: {
                  component_type: "sum",
                },
              },
            },
            {
              on: "category",
              by: null,
              using: {
                component_type: "rolling_probability",
                component: {
                  component_type: "multinomial_with_target",
                  events: [],
                  seed: null,
                  being: "b",
                },
                window_size: 5,
              },
            },
          ],
          learn: true,
          learn_many: false,
          transform: true,
          transform_many: false,
        },
      ],
    },
  ],
}

function createCombineValuesWhen(target, [swappingKey, swappingValue]) {
  return function perform(source) {
    if (isObject(source)) {
      if (source[swappingKey] === swappingValue) {
        source = { ...source, ...target }
      }
      return Object.fromEntries(
        Object.entries(source).map(([key, value]) => {
          return [key, perform(value)]
        })
      )
    }

    if (Array.isArray(source)) {
      return source.map(perform)
    }

    return source
  }
}

const combineValuesWhen = createCombineValuesWhen({ mto: "louco" }, ["label", "label_4"])
const values = combineValuesWhen(config)

console.log(values)
