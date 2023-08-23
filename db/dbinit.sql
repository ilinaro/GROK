CREATE TABLE "User" (
  "id" INT NOT NULL PRIMARY KEY,
  "login" VARCHAR(255),
  "nickname" VARCHAR(255),
  "avatar" VARCHAR(255)
CREATE TABLE "MessagesReactions" (
CREATE TABLE "Themes" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255),
  UNIQUE ("name")
);

CREATE INDEX idx_messagesreactions_message ON "MessagesReactions" ("message_id")
CREATE INDEX idx_messagesreactions_reaction ON "MessagesReactions" ("reaction_id");
CREATE INDEX idx_themes_id ON "Themes" ("id");
CREATE INDEX idx_usersthemes_user ON "UsersThemes" ("user_id");

INSERT INTO "Themes" (id, name) VALUES (1, 'light'), (2, 'dark');
