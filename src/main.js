import { get } from "lodash";


function name(params) {
  console.log(1);
}

const f = { test: 1 };

function test(params) {
  let a = get(f, "test");
  console.log(a);
}

test();
