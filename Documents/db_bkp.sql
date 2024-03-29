PGDMP     !                	    z           canvatreeDB    15.0    15.0 -    V           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            W           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            X           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            Y           1262    16399    canvatreeDB    DATABASE     o   CREATE DATABASE "canvatreeDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE "canvatreeDB";
                canvatreeAdmin    false            Z           0    0    DATABASE "canvatreeDB"    COMMENT     N   COMMENT ON DATABASE "canvatreeDB" IS 'Core DB for CanvaTree Web Application';
                   canvatreeAdmin    false    3673            �            1259    16400    account_data_tbl    TABLE     Z  CREATE TABLE public.account_data_tbl (
    ac_id integer NOT NULL,
    username character varying(15)[],
    email character varying(50)[] NOT NULL,
    is_active boolean NOT NULL,
    is_email_verified boolean NOT NULL,
    ext_login_id text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
 $   DROP TABLE public.account_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16454    address_data_tbl    TABLE     �  CREATE TABLE public.address_data_tbl (
    address_id integer NOT NULL,
    address1 character varying(20)[],
    address2 character varying(20)[],
    city character varying(20)[],
    region character varying(20)[],
    postcode character varying(10)[],
    country character varying(20)[],
    created_by integer,
    updated_by integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 $   DROP TABLE public.address_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16480    external_login_data_tbl    TABLE       CREATE TABLE public.external_login_data_tbl (
    ext_login_id integer NOT NULL,
    provider_name character varying(20)[],
    wse_endpoint text,
    ext_provider_token text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 +   DROP TABLE public.external_login_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16461    gender_data_tbl    TABLE     a   CREATE TABLE public.gender_data_tbl (
    gender_id integer NOT NULL,
    gender_name integer
);
 #   DROP TABLE public.gender_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16414    group_data_tbl    TABLE     V  CREATE TABLE public.group_data_tbl (
    group_id integer NOT NULL,
    ac_id integer NOT NULL,
    mem_id integer NOT NULL,
    group_name character varying(20)[] NOT NULL,
    created_by integer NOT NULL,
    updated_by integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
 "   DROP TABLE public.group_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16440    link_data_tbl    TABLE       CREATE TABLE public.link_data_tbl (
    link_id integer NOT NULL,
    url text NOT NULL,
    group_id integer NOT NULL,
    filepath character varying(260)[] NOT NULL,
    filename character varying(15)[] NOT NULL,
    created_by integer NOT NULL,
    updated_by integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
 !   DROP TABLE public.link_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16466    login_attempt_data_tbl    TABLE     V  CREATE TABLE public.login_attempt_data_tbl (
    login_att_id integer NOT NULL,
    ac_id integer NOT NULL,
    tried_password text NOT NULL,
    ip_address character varying(15)[],
    browser_type character varying(20)[],
    is_success boolean NOT NULL,
    created_by integer NOT NULL,
    created_at timestamp with time zone NOT NULL
);
 *   DROP TABLE public.login_attempt_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16426    membership_data_tbl    TABLE     C  CREATE TABLE public.membership_data_tbl (
    mem_id integer NOT NULL,
    membership_type character varying(20)[] NOT NULL,
    perm_id integer NOT NULL,
    created_by integer NOT NULL,
    updated_by integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
 '   DROP TABLE public.membership_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16407    password_data_tbl    TABLE     H  CREATE TABLE public.password_data_tbl (
    pass_id integer NOT NULL,
    ac_id integer NOT NULL,
    password_hash text NOT NULL,
    pass_salt text NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    created_by integer NOT NULL,
    updated_by integer NOT NULL
);
 %   DROP TABLE public.password_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16433    permission_data_tbl    TABLE     _  CREATE TABLE public.permission_data_tbl (
    perm_id integer NOT NULL,
    permission_type character varying(20)[] NOT NULL,
    p_read boolean NOT NULL,
    p_write boolean NOT NULL,
    p_publish boolean NOT NULL,
    p_premium boolean NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
 '   DROP TABLE public.permission_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16421    team_data_tbl    TABLE     %  CREATE TABLE public.team_data_tbl (
    team_id integer NOT NULL,
    group_id integer NOT NULL,
    ac_id integer NOT NULL,
    created_by integer NOT NULL,
    updated_by integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
 !   DROP TABLE public.team_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16473    ticket_data_tbl    TABLE     o  CREATE TABLE public.ticket_data_tbl (
    ticket_id integer NOT NULL,
    ac_id integer NOT NULL,
    ticket_type character varying(20)[],
    message text NOT NULL,
    attachement bytea,
    priority character varying(5)[] NOT NULL,
    is_open boolean NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
 #   DROP TABLE public.ticket_data_tbl;
       public         heap    canvatreeAdmin    false            �            1259    16447    user_data_table    TABLE     �  CREATE TABLE public.user_data_table (
    user_id integer NOT NULL,
    ac_id integer NOT NULL,
    firstname character varying(20)[],
    lastname character varying(20)[],
    gender_id integer,
    dob date,
    address_id integer,
    phone_c_code character varying(5)[],
    phone_no character varying(12)[],
    created_by integer NOT NULL,
    updated_by integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
 #   DROP TABLE public.user_data_table;
       public         heap    canvatreeAdmin    false            G          0    16400    account_data_tbl 
   TABLE DATA           �   COPY public.account_data_tbl (ac_id, username, email, is_active, is_email_verified, ext_login_id, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    214   �A       O          0    16454    address_data_tbl 
   TABLE DATA           �   COPY public.address_data_tbl (address_id, address1, address2, city, region, postcode, country, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    222   �A       S          0    16480    external_login_data_tbl 
   TABLE DATA           �   COPY public.external_login_data_tbl (ext_login_id, provider_name, wse_endpoint, ext_provider_token, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    226   �A       P          0    16461    gender_data_tbl 
   TABLE DATA           A   COPY public.gender_data_tbl (gender_id, gender_name) FROM stdin;
    public          canvatreeAdmin    false    223   �A       I          0    16414    group_data_tbl 
   TABLE DATA           }   COPY public.group_data_tbl (group_id, ac_id, mem_id, group_name, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    216   �A       M          0    16440    link_data_tbl 
   TABLE DATA           �   COPY public.link_data_tbl (link_id, url, group_id, filepath, filename, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    220   B       Q          0    16466    login_attempt_data_tbl 
   TABLE DATA           �   COPY public.login_attempt_data_tbl (login_att_id, ac_id, tried_password, ip_address, browser_type, is_success, created_by, created_at) FROM stdin;
    public          canvatreeAdmin    false    224   1B       K          0    16426    membership_data_tbl 
   TABLE DATA              COPY public.membership_data_tbl (mem_id, membership_type, perm_id, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    218   NB       H          0    16407    password_data_tbl 
   TABLE DATA           �   COPY public.password_data_tbl (pass_id, ac_id, password_hash, pass_salt, created_at, updated_at, created_by, updated_by) FROM stdin;
    public          canvatreeAdmin    false    215   kB       L          0    16433    permission_data_tbl 
   TABLE DATA           �   COPY public.permission_data_tbl (perm_id, permission_type, p_read, p_write, p_publish, p_premium, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    219   �B       J          0    16421    team_data_tbl 
   TABLE DATA           q   COPY public.team_data_tbl (team_id, group_id, ac_id, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    217   �B       R          0    16473    ticket_data_tbl 
   TABLE DATA           �   COPY public.ticket_data_tbl (ticket_id, ac_id, ticket_type, message, attachement, priority, is_open, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    225   �B       N          0    16447    user_data_table 
   TABLE DATA           �   COPY public.user_data_table (user_id, ac_id, firstname, lastname, gender_id, dob, address_id, phone_c_code, phone_no, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          canvatreeAdmin    false    221   �B       �           2606    16406 (   account_data_tbl account_data_table_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.account_data_tbl
    ADD CONSTRAINT account_data_table_pkey PRIMARY KEY (ac_id);
 R   ALTER TABLE ONLY public.account_data_tbl DROP CONSTRAINT account_data_table_pkey;
       public            canvatreeAdmin    false    214            �           2606    16460 &   address_data_tbl address_data_tbl_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.address_data_tbl
    ADD CONSTRAINT address_data_tbl_pkey PRIMARY KEY (address_id);
 P   ALTER TABLE ONLY public.address_data_tbl DROP CONSTRAINT address_data_tbl_pkey;
       public            canvatreeAdmin    false    222            �           2606    16486 4   external_login_data_tbl external_login_data_tbl_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.external_login_data_tbl
    ADD CONSTRAINT external_login_data_tbl_pkey PRIMARY KEY (ext_login_id);
 ^   ALTER TABLE ONLY public.external_login_data_tbl DROP CONSTRAINT external_login_data_tbl_pkey;
       public            canvatreeAdmin    false    226            �           2606    16465 $   gender_data_tbl gender_data_tbl_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.gender_data_tbl
    ADD CONSTRAINT gender_data_tbl_pkey PRIMARY KEY (gender_id);
 N   ALTER TABLE ONLY public.gender_data_tbl DROP CONSTRAINT gender_data_tbl_pkey;
       public            canvatreeAdmin    false    223            �           2606    16420 "   group_data_tbl group_data_tbl_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.group_data_tbl
    ADD CONSTRAINT group_data_tbl_pkey PRIMARY KEY (group_id);
 L   ALTER TABLE ONLY public.group_data_tbl DROP CONSTRAINT group_data_tbl_pkey;
       public            canvatreeAdmin    false    216            �           2606    16446     link_data_tbl link_data_tbl_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.link_data_tbl
    ADD CONSTRAINT link_data_tbl_pkey PRIMARY KEY (link_id);
 J   ALTER TABLE ONLY public.link_data_tbl DROP CONSTRAINT link_data_tbl_pkey;
       public            canvatreeAdmin    false    220            �           2606    16472 2   login_attempt_data_tbl login_attempt_data_tbl_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public.login_attempt_data_tbl
    ADD CONSTRAINT login_attempt_data_tbl_pkey PRIMARY KEY (login_att_id);
 \   ALTER TABLE ONLY public.login_attempt_data_tbl DROP CONSTRAINT login_attempt_data_tbl_pkey;
       public            canvatreeAdmin    false    224            �           2606    16432 ,   membership_data_tbl membership_data_tbl_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.membership_data_tbl
    ADD CONSTRAINT membership_data_tbl_pkey PRIMARY KEY (mem_id);
 V   ALTER TABLE ONLY public.membership_data_tbl DROP CONSTRAINT membership_data_tbl_pkey;
       public            canvatreeAdmin    false    218            �           2606    16413 (   password_data_tbl password_data_tbl_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.password_data_tbl
    ADD CONSTRAINT password_data_tbl_pkey PRIMARY KEY (pass_id);
 R   ALTER TABLE ONLY public.password_data_tbl DROP CONSTRAINT password_data_tbl_pkey;
       public            canvatreeAdmin    false    215            �           2606    16439 ,   permission_data_tbl permission_data_tbl_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.permission_data_tbl
    ADD CONSTRAINT permission_data_tbl_pkey PRIMARY KEY (perm_id);
 V   ALTER TABLE ONLY public.permission_data_tbl DROP CONSTRAINT permission_data_tbl_pkey;
       public            canvatreeAdmin    false    219            �           2606    16425     team_data_tbl team_data_tbl_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.team_data_tbl
    ADD CONSTRAINT team_data_tbl_pkey PRIMARY KEY (team_id);
 J   ALTER TABLE ONLY public.team_data_tbl DROP CONSTRAINT team_data_tbl_pkey;
       public            canvatreeAdmin    false    217            �           2606    16479 $   ticket_data_tbl ticket_data_tbl_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.ticket_data_tbl
    ADD CONSTRAINT ticket_data_tbl_pkey PRIMARY KEY (ticket_id);
 N   ALTER TABLE ONLY public.ticket_data_tbl DROP CONSTRAINT ticket_data_tbl_pkey;
       public            canvatreeAdmin    false    225            �           2606    16453 $   user_data_table user_data_table_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.user_data_table
    ADD CONSTRAINT user_data_table_pkey PRIMARY KEY (user_id);
 N   ALTER TABLE ONLY public.user_data_table DROP CONSTRAINT user_data_table_pkey;
       public            canvatreeAdmin    false    221            �           2606    16487 $   password_data_tbl account_data_table    FK CONSTRAINT     �   ALTER TABLE ONLY public.password_data_tbl
    ADD CONSTRAINT account_data_table FOREIGN KEY (ac_id) REFERENCES public.account_data_tbl(ac_id) NOT VALID;
 N   ALTER TABLE ONLY public.password_data_tbl DROP CONSTRAINT account_data_table;
       public          canvatreeAdmin    false    215    214    3487            G      x������ � �      O      x������ � �      S      x������ � �      P      x������ � �      I      x������ � �      M      x������ � �      Q      x������ � �      K      x������ � �      H      x������ � �      L      x������ � �      J      x������ � �      R      x������ � �      N      x������ � �     