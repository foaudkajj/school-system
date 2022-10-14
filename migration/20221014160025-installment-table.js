const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class installmentTable20221014160025 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`installment\` (
                \`id\` char(36) not null,
                \`date\` datetime not null,
                \`amount\` decimal(8,2) not null,
                \`student_id\` char(36) not null,
                constraint \`pk_student_evaluation\` primary key (\`id\`),
                constraint \`fk_installment_student\` foreign key (\`student_id\`) references \`student\` (\`id\`) on update cascade on delete restrict
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`installment\`;`,
        );
    }

}
