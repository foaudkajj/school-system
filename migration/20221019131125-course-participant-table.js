const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class courseParticipantTable20221019131125 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`course_participant\` (
                \`id\` char(36) not null,
	            \`name\` varchar(100) not null,
	            \`surname\` varchar(100) null,
	            \`tr_name\` varchar(100) not null,
	            \`tr_surname\` varchar(100) null,
	            \`gender\` enum ('Male','Female') not null,
	            \`gsm\` varchar(25)  null,
	            \`test_passed\` boolean default false null,
	            \`test_mark\` int null,
	            \`certificate_received\` boolean default false null,
                \`course_id\` char(36) not null, 
                constraint \`pk_course_participant\` primary key (\`id\`),
                constraint \`fk_course_participant_course\` foreign key (\`course_id\`) references \`course\` (\`id\`) on update cascade on delete restrict
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`course_participant\`;`,
        );
    }

}
