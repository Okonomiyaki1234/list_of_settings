-- プロジェクト「律」Supabase用SQL集約ファイル
-- テーブル定義・RLS（Row Level Security）ポリシー含む

-- キャラクター
create table characters (
  id serial primary key,
  surname text not null,
  name text not null,
  nickname text,
  residence text,
  belongs text[],
  sou text not null,
  works text[],
  introduction text,
  birthday date,
  deathday date,
  gender text,
  relations jsonb,
  related text[],
  description text,
  image text,
  memo text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- イベント（歴史・ストーリー共通）
create table events (
  id serial primary key,
  title text not null,
  yomi text,
  date date not null,
  description text,
  period jsonb, -- {start: date, end: date}
  prev_work text,
  next_work text,
  characters text[],
  places text[],
  is_story boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- アイテム
create table items (
  id serial primary key,
  name text not null,
  yomi text not null,
  creator text,
  description text not null,
  effect text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 用語集
create table glossary (
  id serial primary key,
  name text not null,
  description text not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- RLS有効化
alter table characters enable row level security;
alter table events enable row level security;
alter table items enable row level security;
alter table glossary enable row level security;

-- RLSポリシー例（全員読み取り可、書き込みはauthenticatedのみ）
create policy "Allow read to all" on characters for select using (true);
create policy "Allow insert to authed" on characters for insert with check (auth.role() = 'authenticated');
create policy "Allow update to authed" on characters for update using (auth.role() = 'authenticated');
create policy "Allow read to all" on events for select using (true);
create policy "Allow insert to authed" on events for insert with check (auth.role() = 'authenticated');
create policy "Allow update to authed" on events for update using (auth.role() = 'authenticated');
create policy "Allow read to all" on items for select using (true);
create policy "Allow insert to authed" on items for insert with check (auth.role() = 'authenticated');
create policy "Allow update to authed" on items for update using (auth.role() = 'authenticated');
create policy "Allow read to all" on glossary for select using (true);
create policy "Allow insert to authed" on glossary for insert with check (auth.role() = 'authenticated');
create policy "Allow update to authed" on glossary for update using (auth.role() = 'authenticated');
