--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: member; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE member (
    username text NOT NULL PRIMARY KEY,
    password text NOT NULL,
    fname text NOT NULL,
    lname text NOT NULL,
    email text NOT NULL
);


ALTER TABLE public.member OWNER TO postgres;

--
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY member (username, password, fname, lname, email) FROM stdin;
fingger004	0404	Tanakorn	Onlamoon	tanakorn_o@cmu.ac.th
\.


--
-- Name: member_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY member
    ADD CONSTRAINT member_pkey PRIMARY KEY (username);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

