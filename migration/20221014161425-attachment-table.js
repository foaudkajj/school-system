const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class attachmentTable20221014161425 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`attachment\` (
                \`id\` char(36) not null,
                \`name\` varchar(100) not null,
                \`uri\` varchar(1024) not null,
                \`uploaded_at\` datetime not null,
                \`type\` enum('Identity','CV','Photo','Certificate','General') not null,
                \`object_id\` char(36) not null,
                constraint \`pk_attachment\` primary key (\`id\`)
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`attachment\`;`,
        );
    }

}
