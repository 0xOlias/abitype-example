import { ExtractAbiFunctions } from "abitype";

import okpcAbiRaw from "./OKPC.json";

const okpcAbi = okpcAbiRaw as const;

type Result = ExtractAbiFunctions<typeof okpcAbi, "payable">;
