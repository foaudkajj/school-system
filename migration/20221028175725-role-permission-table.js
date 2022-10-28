const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class rolePermissionTable20221028175725 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`role_permission\` (
                \`id\` char(36) not null,
                \`role_id\` char(36) not null, 
                \`permission_id\` char(36) not null, 
                constraint \`pk_role_permission\` primary key (\`id\`),
                constraint \`fk_role_permission_role\` foreign key (\`role_id\`) references \`role\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_role_permission_permission\` foreign key (\`permission_id\`) references \`permission\` (\`id\`) on update cascade on delete restrict
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`role_permission\`;`,
        );
    }

}
