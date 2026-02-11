# structure

```bash
backend/src/
├── index.ts                     # main script
├── server.ts                    # server setting
├── config/
│   └── env.ts                   # environment settings
└── plugins/                     # feature plugins
    └── auth/
        ├── index.ts             # plugin register
        ├── routes.ts            # router
        ├── handlers.ts          # handlers
        ├── services.ts          # business logic
        └── repositories.ts      # data access
```
