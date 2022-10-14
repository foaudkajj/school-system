const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class studentEvaluationTable20221014152025 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`student_evaluation\` (
                \`id\` char(36) not null,
                \`date\` datetime not null,
                \`attendance\` enum('Available','Late','Absent') null,
                \`participation\` enum('Good','Mid','Bad') null,
                \`homework\` enum('Good','Mid','Bad') null,
                \`behaviout\` enum('Good','Mid','Bad') null,
                \`fee\` decimal(8,2) default(0) not null,
                \`discount\` integer null,
                \`transport_fee\` decimal(8,2) null,
                \`note\` text null,
                \`student_id\` char(36) not null,
                constraint \`pk_student_evaluation\` primary key (\`id\`),
                constraint \`fk_student_evaluation_student\` foreign key (\`student_id\`) references \`student\` (\`id\`) on update cascade on delete restrict
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`student_evaluation\`;`,
        );
    }

}
