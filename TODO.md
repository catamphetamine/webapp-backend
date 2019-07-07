* Account alias history (on delete poster CASCADE delete aliases).

* Block account log (by, reason).

* AuthenticationToken (`type: string`, `value: text`, `attemptsLeft: number`, `expiresAt: Date`).

* Authentication: `account: Account`, `token: Token`, `protocol: JSON` (e.g. `['password', 'sms', 'email']`), `temperature: Float = 0.0`, `attempts: Number = 0`. Delete after authentication (add a record to authentication history).

* Authentication ("refresh") tokens: `user: User`, `revokedAt: Date`.

* Authentication history: `latestAuthenticationDate: Date` (access token "refresh" date), `ip: string`, `origin: JSON`, `token: Token` (on delete CASCADE).

* Attachment: `createdAt: Date`, `createdAtUTC0: Date`, `type: string`, `info: JSON`, `account: Account`.

* Stream: `type: string`, `accounts: Account[]`.

* Notifications: `account: Account`, `type: string`.

* Post: `upvotes: number`, `downvotes: number`.

* Messages: `content: Text`, `attachments: Attachment[]`, `read: boolean`, `editedAt: Date`.

* Subscriptions: `stream: Stream`, `account: Account`.